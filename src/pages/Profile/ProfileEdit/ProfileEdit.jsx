import SetProfile from "../../../components/common/SetProfile/SetProfile";
import SaveTopBar from "../../../components/TopBar/SaveTopBar/SaveTopBar";

export default function ProfileEdit() {
  return (
    <>
      <SaveTopBar />
      <SetProfile join={false} />
    </>
  );
}
