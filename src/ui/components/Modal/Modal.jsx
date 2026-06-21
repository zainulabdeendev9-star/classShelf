import {Button} from "../..";

const Modal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <h2 className="text-xl font-bold mb-4">Confirm Action</h2>
                <p className="text-gray-600 mb-6">Are you sure you want to perform this action?</p>
                <div className="flex justify-end gap-3">
                    <Button
                        onClick={onClose}
                        variant="secondary"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={onConfirm}
                        variant="danger"
                    >
                        Confirm
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Modal