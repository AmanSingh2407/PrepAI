import { useNavigate } from "react-router-dom";
import ProfileSidebar from "../components/ProfileSidebar";
import { useState } from "react";

const EditProfile = () => {
  const navigate = useNavigate();

  // 🔥 STATES
  const [image, setImage] = useState(null);
  const [gender, setGender] = useState("");
  const [userType, setUserType] = useState("");
  const [domain, setDomain] = useState("");

  // ✅ IMAGE UPLOAD
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // ✅ SAVE
  const handleSave = () => {
    const profileData = {
      gender,
      userType,
      domain,
    };

    console.log(profileData);
    navigate("/profile");
  };

  return (
    <div className="space-y-6">

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">

        {/* LEFT PANEL */}
        <div className="sticky top-6 self-start h-[calc(100vh-112px)]">
          <ProfileSidebar />
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:col-span-3 bg-white/5 border border-white/10 rounded-2xl flex">

          {/* IMAGE SECTION */}
          <div className="w-[260px] border-r border-white/10 flex flex-col items-center py-10">

            <h2 className="text-white text-lg font-semibold mb-6">
              Edit Profile
            </h2>

            <div className="relative">

              {/* IMAGE */}
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-600">
                {image && (
                  <img
                    src={image}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* INPUT */}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="upload-image"
              />

              {/* CAMERA */}
              <label
                htmlFor="upload-image"
                className="absolute bottom-2 right-2 bg-blue-500 p-2 rounded-full text-white cursor-pointer hover:scale-105 transition"
              >
                📷
              </label>

            </div>

          </div>

          {/* FORM */}
          <div className="flex-1 p-6 overflow-y-auto max-h-[80vh] space-y-4">

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">First Name*</label>
                <input className="input w-full" />
              </div>

              <div>
                <label className="label">Last Name*</label>
                <input className="input w-full" />
              </div>
            </div>

            <div>
              <label className="label">Username*</label>
              <input className="input w-full" />
            </div>

            <div>
              <label className="label">Email*</label>
              <input className="input w-full" />
            </div>

            <div>
              <label className="label">DOB*</label>
              <input type="date" className="input w-full" />
            </div>

            <div>
              <label className="label">Mobile*</label>
              <input className="input w-full" />
            </div>

            {/* 🔥 GENDER */}
            <div>
              <label className="label">Gender*</label>
              <div className="flex gap-3">
               {["Male", "Female", "Other"].map((g) => (
  <button
    type="button"
    key={g}
    onClick={() => setGender(g)}
    className={`px-4 py-2 rounded-full border cursor-pointer transition active:scale-95
      ${
        gender === g
          ? "bg-blue-500 text-white border-blue-500"
          : "bg-white/10 text-gray-300 border-white/10 hover:bg-white/20"
      }`}
  >
    {g}
  </button>
))}
              </div>
            </div>

            {/* 🔥 USER TYPE */}
            <div>
              <label className="label">User Type*</label>
              <div className="flex flex-wrap gap-2">
               {["College Student", "Professional", "School Student", "Fresher"].map((u) => (
  <button
    type="button"
    key={u}
    onClick={() => setUserType(u)}
    className={`px-4 py-2 rounded-full border cursor-pointer transition active:scale-95
      ${
        userType === u
          ? "bg-blue-500 text-white border-blue-500"
          : "bg-white/10 text-gray-300 border-white/10 hover:bg-white/20"
      }`}
  >
    {u}
  </button>
))}
              </div>
            </div>

            {/* 🔥 DOMAIN */}
            <div>
              <label className="label">Domain*</label>
              <div className="flex flex-wrap gap-2">
                {["Management", "Engineering", "Art & Science", "Medical", "Law", "Other"].map((d) => (
  <button
    type="button"
    key={d}
    onClick={() => setDomain(d)}
    className={`px-4 py-2 rounded-full border cursor-pointer transition active:scale-95
      ${
        domain === d
          ? "bg-blue-500 text-white border-blue-500"
          : "bg-white/10 text-gray-300 border-white/10 hover:bg-white/20"
      }`}
  >
    {d}
  </button>
))}
              </div>
            </div>

            <div>
              <label className="label">Course*</label>
              <select className="input w-full">
                <option>B.Tech/B.E.</option>
              </select>
            </div>

            <div>
              <label className="label">Course Specialization*</label>
              <select className="input w-full">
                <option>Computer Science and Engineering</option>
              </select>
            </div>

            <div>
              <label className="label">Course Duration*</label>
              <div className="flex gap-4">
                <input className="input w-24" placeholder="2022" />
                <input className="input w-24" placeholder="2026" />
              </div>
            </div>

            <div>
              <label className="label">Organization/College*</label>
              <select className="input w-full">
                <option>Select College</option>
              </select>
            </div>

            <div>
              <label className="label">Year*</label>
              <input className="input w-full" />
            </div>

            <div>
              <label className="label">Address*</label>
              <input className="input w-full" />
            </div>

            {/* SAVE */}
            <div className="flex justify-end pt-4">
              <button
                onClick={handleSave}
                className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg text-white"
              >
                Save
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default EditProfile;