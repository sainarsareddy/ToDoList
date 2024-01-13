import React from "react";

const UpdateForm = (props) => {
  return (
    <div>
      <>
        {/* Update task */}
        <div className="row">
          <div className="col">
            <input
              value={props.updateData && props.updateData.title}
              onChange={(e) => props.changeTask(e)}
              className="form-control form-control-lg"
            />
          </div>
          <div className="col-auto">
            <button
              onClick={props.updateTask}
              className="btn btn-lg btn-success mr-20"
            >
              Update
            </button>
            <button
              onClick={props.cancelUpdate}
              className="btn btn-lg btn-warning"
            >
              Cancel
            </button>
          </div>
        </div>
        <br />
      </>
    </div>
  );
};

export default UpdateForm;
