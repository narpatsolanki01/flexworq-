import React,{useCallback, useState} from 'react'
import { useDropzone } from "react-dropzone" // import dropzone library
// import { useSnackbar } from 'notistack';

function Index({ onDrop, designType, className, noClick, fileType, fileSize, maxFiles, drag, text }) {
    /* 
        OnDrop - OnDrop Create in parent Component and pass in Dropzone child component
        designType - for diffrent diffrent design(0 : text , 1 : button , image )
        className - this className for button,image and text stylesheet
        status - Dropzone true or false -:
            byDefault status is true
            status true the dropzone work and browse images.
            status false then dropzone not work.
        
        error(true and false )
            1. if true then show error
            2. if false then no show error
        
        fileType - which type upload by dropZone
            by default upload all file

            {
                'image/png': ['.png'],
                'text/html': ['.html', '.htm'],
            }
        
        fileSize - Upload file size ....
                   by default upload file size is unlimeted

        maxFiles  - how many filex upload...

        drag - disable drang and drop then false default true

    */
    // const { enqueueSnackbar } = useSnackbar();
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, noClick: noClick, maxFiles: maxFiles, fileSize: fileSize, noDrag: drag, accept: { 'image/png': ['.png', '.jpeg'] } })

    // const show = (errors) =>{
    //     enqueueSnackbar(errors[0].code + " : " + errors[0].message, { variant: 'error' },{preventDuplicate: true})
    // }

    // const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    //      console.log(errors)
    // ));

    return (
        <>
            {/* Dropzone Component */}
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    designType === 0 ?
                        (
                            <span className={className} > {isDragActive ? 'Drop here' : text ?? 'Upload File'}</span>
                        )
                        : designType === 1 ?
                            (
                                <button className={className} >{isDragActive ? 'Drop here' : text ?? 'Upload File'}</button>
                            )
                            :
                            (
                                <div className='text-center px-2 px-lg-5 py-5' style={{border:'1px dashed gray'}}>
                                    <h4 className='mt-4'>Upload a clear, horizontal ambiance picture</h4>
                                    <span>This should be a general view and no detail photo. For example, upload a picture of the restaurant room and not of a coffee machine.</span>
                                </div>
                            )
                }
            </div>
        </>
            
    )
}

export default Index