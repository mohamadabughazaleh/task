import axios from "axios";
import { NotifySuccess, NotifyError } from "../Notify/Notify";
export function CreateInfo(url, inputs) {
  axios
    .post(url, inputs)
    .then((e) => {
      NotifySuccess("Success");
    })
    .catch((error) => {
      NotifyError("Error");
    });
}
