import {Button, Modal} from "antd";

const InfoModal = ({message, handleOk}) => {

    return (
        <div className="InfoModal">
            <Modal title="Informacja"
                   open={!!message}
                   closable={false}
                   style={{top: 180}}
                   footer={[
                       <Button key="submit" type="primary" onClick={handleOk}>
                           Ok
                       </Button>
                   ]}>
                <p>{message}</p>
            </Modal>
        </div>
    );
}

export default InfoModal;