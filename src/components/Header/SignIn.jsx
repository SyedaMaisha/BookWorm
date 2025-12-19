import React from 'react';

const SignIn = () => {
    return (
        <div>
            <button className="btn mr-2 bg-lightBlue text-white rounded-box" onClick={() => document.getElementById('my_modal_1').showModal()}>Sign In</button>

            <dialog id="my_modal_1" className="modal ">
                <div className="modal-box modal-middle">

                    <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend text-2xl"> Sign In </legend>
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />

                        <button className="btn btn-neutral mt-4">Sign In</button>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default SignIn;