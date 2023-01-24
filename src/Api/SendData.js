import axios from "axios";
import { NotifySuccess, NotifyError } from "../Notify/Notify";
export function CreateInfo(url, inputs) {
  axios
    .post(url, inputs)
    .then(() => {
      NotifySuccess("Success");
    })

    .catch(() => {
      NotifyError("Error");
    });
}
