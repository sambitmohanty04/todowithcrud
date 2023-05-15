import React, { useState } from 'react'
import Modal from '../component/Modal'
// import Button from '../component/Button'

const ModalPage = () => {

    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionbar = <div>
        <button onClick={handleClose} className='btn btn-primary'>I Accept</button>
    </div>

    const modal = <Modal onClose={handleClose} actionbar={actionbar}><p>Hello Friends</p></Modal>

    return (
        <>
            <div className='relative'>

                <button onClick={handleClick} className='btn btn-primary'>Click Here modal</button>
                {showModal && modal}

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                {/* <button onClick={handleClick} className='btn btn-primary'>Click Here modal</button>
                {showModal && modal} */}

            </div>
        </>
    )
}

export default ModalPage