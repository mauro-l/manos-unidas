import Banner from "../../components/common/Banner.jsx";
import BtnBackProfile from "../../components/common/BtnBackProfile.jsx";
import EditFoundInfo from "../../components/features/profile/EditFoundInfo.jsx";

function EditFoundInfoPage() {
  return (
    <div>
      <Banner>
        <BtnBackProfile />
        <h3>Completa o edita la informacion</h3>
      </Banner>
      <div className="p-4">
        <h3 className="py-6 text-2xl font-semibold">Información básica</h3>
        <EditFoundInfo />
      </div>
    </div>
  );
}

export default EditFoundInfoPage;
