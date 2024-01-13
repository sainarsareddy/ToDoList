import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
  return (
    <div>
      {toDo &&
        toDo.map((Task, index) => {
          return (
            <React.Fragment key={Task.id}>
              <div className="col taskbg">
                <div className={Task.status ? "done" : ""}>
                  <span className="TaskNumber">{index + 1}</span>
                  <span className="Tasktext">{Task.title}</span>
                </div>
                <div className="iconsWrap">
                  <span
                    title="Completed / Not Completed"
                    onClick={() => markDone(Task.id)}
                  >
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  {Task.status ? null : (
                    <span
                      onClick={() =>
                        setUpdateData({
                          id: Task.id,
                          title: Task.title,
                          status: Task.status ? true : false,
                        })
                      }
                      title="Edit"
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                  )}
                  <span title="Delete" onClick={() => deleteTask(Task.id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default ToDo;
