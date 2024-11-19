import React, {useEffect, useRef} from "react";
import useExamStore from "../../../store/quizimStore";
import {QUIZ_RULES} from "../../../constants/quizim.ts";

const Modal: React.FC = () => {
    const modalRef = useRef<HTMLDialogElement>(null);

    const {startExam} = useExamStore();
    const isExamStarted = useExamStore((state) => state.isExamStarted);

    useEffect(() => {
        const modal = modalRef.current;
        if (!modal) return;
        if (isExamStarted) {
            modal.close();
        } else {
            modal.showModal();
        }
    }, [isExamStarted]);

    return (
        <dialog ref={modalRef} className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-extrabold text-xl">Sınav Kuralları</h3>
                <div className="mt-4">
                    {QUIZ_RULES.map((rule, index) => (
                        <div key={index}>
                            <h2 className="font-bold mt-3 uppercase">{rule.title}</h2>
                            <p>{rule.description}</p>
                        </div>
                    ))}
                </div>
                <div className="modal-action">
                    <button
                        className="btn bg-case-dark-blue text-white hover:bg-case-dark-blue"
                        onClick={startExam}
                    >
                        Anladım, Sınava Başla.
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default Modal;
