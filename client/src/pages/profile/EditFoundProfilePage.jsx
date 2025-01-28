import Banner from "../../components/common/Banner.jsx";
import BtnBackProfile from "../../components/common/BtnBackProfile.jsx";
import EditFoundProfile from "../../components/features/profile/EditFoundProfile.jsx";

function EditFoundProfilePage() {
  return (
    <>
      <Banner>
        <BtnBackProfile />
        <h2 className="text-3xl font-semibold leading-tree text-balance">
          Completa o edita el perfil de tu fundacíon
        </h2>
      </Banner>
      <div className="px-4 py-10">
        <EditFoundProfile />
      </div>
    </>
  );
}

export default EditFoundProfilePage;
