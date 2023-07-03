import {Button, Form, Input, InputNumber, Space, Table, Tooltip, AutoComplete, DatePicker} from 'antd';
import dayjs from 'dayjs';
import React, {useContext, useRef} from 'react';
import {InfoCircleOutlined} from "@ant-design/icons";

const EditableContext = React.createContext(null);
const EditableRow = ({index, ...props}) => {
    const [form] = Form.useForm();
    return (
        <Form name={props["data-row-key"]} form={form} component={false}>
            <EditableContext.Provider value={{form}}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};
const EditableCell = ({
                          title,
                          editable,
                          children,
                          dataIndex,
                          inputType,
                          options,
                          rules,
                          requiredException,
                          record,
                          handleSave,
                          ...restProps
                      }) => {

        const inputRef = useRef(null);
        const {form} = useContext(EditableContext);

        const save = async () => {
            const values = form.getFieldsValue();

            const parsedValues = Object.fromEntries(
                Object.entries(values)
                    .map(([k, v]) => k === 'date' ? [k, v ? v.format('DD-MM-YYYY') : ''] : [k, v])
            );

            handleSave({
                ...record,
                ...parsedValues,
            });
            try {
                form.validateFields([dataIndex], {force: true});
                if (dataIndex === 'function') {
                    form.validateFields(['phone', 'email'], {force: true});
                }
            } catch (errInfo) {
            }
        };

        let childNode = children;
        if (editable) {
            let inputNode = <Input onPressEnter={save} onBlur={save}></Input>;

            if (inputType === 'number') {
                inputNode =
                    <InputNumber onPressEnter={save} onBlur={save} min={options[0]} max={options[1]}/>
            } else if (inputType === 'select') {
                inputNode = <AutoComplete
                    options={options
                        .map(o => ({value: o.value, label: o.label, dependency: o.dependency}))
                        .filter(o => (!o.dependency || o.dependency.value === record[o.dependency.cell]))}
                    filterOption={(inputValue, option) => option.label.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                    onBlur={save}
                />
            } else if (inputType === 'date') {
                inputNode = <DatePicker placeholder="Wybierz datę" onChange={save} format={'DD-MM-YYYY'}/>
            }

            let nodeRules = (record.function !== requiredException)
                ? rules
                : rules.filter(r => !r.required);

            const parseInitialValue = () => inputType === 'date' && children[1].length
                ? dayjs(children[1], 'DD-MM-YYYY')
                : children[1];


            childNode = <Form.Item style={{margin: 0}}
                                   name={dataIndex}
                                   rules={nodeRules}
                                   initialValue={parseInitialValue()}
            >
                {inputNode}
            </Form.Item>
        }
        return <td {...restProps}>{childNode}</td>;
    }
;
const RegistrationTable = ({
                               dataSource,
                               setDataSource,
                               config,
                               importantAction = true,
                               name,
                           }) => {
    const handleDelete = (key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
    };
    const handleImportant = (key,) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => key === item.key);
        const item = newData[index];
        item.important = !item.important;

        setDataSource(newData);
    };
    const columnsData = Object.entries(config).map(
        ([k, v]) => {
            return {
                title: (
                    <>
                        {v.title}
                        {v.headerTooltip &&
                            <Tooltip title={v.headerTooltip} color="#216575">
                                <InfoCircleOutlined
                                    style={{marginLeft: 5, color: 'rgba(0, 0, 0, 0.45)', cursor: 'help'}}/>
                            </Tooltip>}
                    </>
                ),
                dataIndex: k,
                width: `${83 / Object.entries(config).length}%`,
                editable: true,
                type: v.type || 'text',
                options: v.options,
                rules: v.rules,
                requiredException: v.requiredException || false,
            }
        }
    )

    const defaultColumns = [
        ...columnsData,
        {
            title: 'Akcje',
            dataIndex: 'operation',
            render: (_, record) =>
                dataSource.length >= 1 ? (
                    <Space size="middle">
                        <a onClick={() => handleDelete(record.key)}>Usuń</a>
                        {importantAction &&
                            <Tooltip
                                title={record.important
                                    ? "Usuń z najważniejszych osiągnięć koła w ostatnim roku."
                                    : "Dodaj do najważniejszych osiągnięć koła w ostatnim roku."
                                }
                                color="#216575"
                            >
                                <a onClick={() => handleImportant(record.key)}>{record.important ? 'Oznaczono' : 'Oznacz jako ważne'}</a>
                            </Tooltip>
                        }
                    </Space>
                ) : null,
        },
    ];
    const handleAdd = () => {
        const newItem = Object.fromEntries(
            Object.entries(config).map(
                ([k, v]) => [k, '']
            )
        )

        const newData = {
            key: dataSource.length + 1,
            ...(importantAction && {important: false}),
            ...newItem,
        };
        setDataSource([...dataSource, newData]);
    };
    const handleSave = (row) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        setDataSource(newData);
    };
    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };
    const columns = defaultColumns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.type,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                options: col.options,
                rules: col.rules,
                requiredException: col.requiredException,
                handleSave,
            }),
        };
    });
    return (
        <div>
            <Button
                onClick={handleAdd}
                type="default"
                style={{marginBottom: 16}}
            >
                Dodaj wiersz
            </Button>
            <Table
                components={components}
                rowClassName={(record) => record.important ? 'editable-row row-important' : 'editable-row'}
                bordered
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                rowKey={(row) => name + '_' + row.key}
                locale={{
                    emptyText: 'Brak wpisów',
                }}
            />
        </div>
    );
};

export default RegistrationTable;