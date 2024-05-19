import React from "react";
//Bootstrap and jQuery libraries
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";

function Add() {
  //initialize datatable
  $(document).ready(function () {
    $("#example").DataTable();
  });

  return (
    <>
      <div
        className="container-fluid pt-3 overflow-auto scrollbar-hidden bg-light"
        style={{ height: "100vh" }}
      >
        <div className="row">
          <div className="col ">
            <h4 className="fw-600 fsp-22">Add Email Templates</h4>
          </div>
        </div>
        <div className="row my-2">
          <div className="col">
            <div className="card  p-4 mb-2">
              <div className="row">
                <div className="col-md-3 col-sm-12 fsp-15 fw-600">
                  Template Type
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="row">
                    <input
                      className="form-control bg-white border h-100 p-2"
                      type="text"
                      placeholder="Enter category name"
                    />
                  </div>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-3 col-sm-12 fsp-15 fw-600">
                  Template Subject
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="row">
                    <input
                      className="form-control bg-white border h-100 p-2"
                      type="text"
                      placeholder="Enter category name"
                    />
                  </div>
                </div>
              </div>

              <div className="row my-3">
                <div className="col-md-3 col-sm-12 fsp-15 fw-600">
                  Template Subject
                </div>
                <div className="col-md-8 col-sm-12">
                  <div className="row">
                  <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {


                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
                  </div>

                  <div className="row my-3">
                    <div className="col-md-1 col-sm-4  p-0">
                      <button className="btn btn-primary fsp-13 rounded-1">Submit</button>
                    </div>
                    <div className="col-md-2 col-sm-2 mx-4">
                      <button className="btn btn-secondary fsp-13 rounded-1">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Add;
