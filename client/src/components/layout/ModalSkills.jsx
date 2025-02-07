import { useFormikContext } from "formik";
import { HiOutlineXMark } from "react-icons/hi2";

const SkillsModal = ({ isOpen, onClose, skills, loading, error }) => {
  const { values, setFieldValue } = useFormikContext();

  const handleSkillToggle = (habilidadId) => {
   
    const currentSkills = values.skills || [];
    const updatedSkills = currentSkills.includes(habilidadId)
      ? currentSkills.filter((id) => id !== habilidadId)
      : [...currentSkills, habilidadId];

    if (updatedSkills.length <= 10) {
      setFieldValue("skills", updatedSkills);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="relative max-w-md space-y-1 modal-box">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-bold leading-tree text-neutral">
            Habilidades
          </h3>
          <button className="btn btn-ghost btn-circle" onClick={onClose}>
            <HiOutlineXMark className="text-xl" />
          </button>
        </div>

        <p className="text-sm text-neutral">
          Puedes añadir hasta un máximo de 10 habilidades que buscas en los
          voluntarios.
        </p>

        <div className="max-h-[500px] overflow-y-auto pr-2 pt-1">
          {loading ? (
            <div className="flex justify-center py-4">
              <span className="loading loading-spinner loading-md"></span>
            </div>
          ) : error ? (
            <div className="alert alert-error">{error}</div>
          ) : (
            skills.map((skill) => (
              <div key={skill.id} className="form-control">
                <label className="justify-start gap-3 py-1 cursor-pointer label">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary [--chkbg:theme(colors.primary)] [--chkfg:white]"
                    checked={(values.skills || []).includes(skill.id)}
                    onChange={() => handleSkillToggle(skill.id)}
                    disabled={
                      (values.skills || []).length >= 10 &&
                      !(values.skills || []).includes(skill.id)
                    }
                  />
                  <div>
                    <span className="label-text">{skill.skill}</span>
                    {skill.descripcion && (
                      <p className="text-xs text-base-content/70">
                        {skill.descripcion}
                      </p>
                    )}
                  </div>
                </label>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose}>
        <button className="w-full h-full cursor-default"></button>
      </div>
    </div>
  );
};

export default SkillsModal;
