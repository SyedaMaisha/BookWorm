import React from 'react';

const SignUp = () => {
    return (
        <div>
            <button className="btn  bg-lightGreen text-white rounded-box" onClick={() => document.getElementById('my_modal_2').showModal()}>Sign Up</button>

            <dialog id="my_modal_2" className="modal ">
                <div className="modal-box modal-middle">

                    <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend text-2xl"> Sign Up </legend>
                        
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Name" />

                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />

                        <button className="btn btn-neutral mt-4">Sign Up</button>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default SignUp;