const profilePicInput = document.getElementById('profilePic');
    const previewPic = document.getElementById('previewPic');

    // Load saved profile on page load
    window.onload = function () {
      const profile = JSON.parse(localStorage.getItem('myProfile'));
      if (profile) {
        document.getElementById("displayName").textContent = profile.name;
        document.getElementById("displayEmail").textContent = profile.email;
        document.getElementById("displayPhone").textContent = profile.phone;
        document.getElementById("displayAge").textContent = profile.age;
        document.getElementById("displayGuardianName").textContent = profile.guardianName;
        document.getElementById("displayRelation").textContent = profile.relation;
        document.getElementById("displayGuardianPhone").textContent = profile.guardianPhone;
        document.getElementById("displayGuardianEmail").textContent = profile.guardianEmail;
        if (profile.image) {
          previewPic.src = profile.image;
        }
      }
    };

    function saveProfile() {
      const reader = new FileReader();
      const file = profilePicInput.files[0];

      const profileData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        age: document.getElementById("age").value,
        guardianName: document.getElementById("guardianName").value,
        relation: document.getElementById("relation").value,
        guardianPhone: document.getElementById("guardianPhone").value,
        guardianEmail: document.getElementById("guardianEmail").value
      };

      const updateDisplay = (imageSrc = "") => {
        document.getElementById("displayName").textContent = profileData.name;
        document.getElementById("displayEmail").textContent = profileData.email;
        document.getElementById("displayPhone").textContent = profileData.phone;
        document.getElementById("displayAge").textContent = profileData.age;
        document.getElementById("displayGuardianName").textContent = profileData.guardianName;
        document.getElementById("displayRelation").textContent = profileData.relation;
        document.getElementById("displayGuardianPhone").textContent = profileData.guardianPhone;
        document.getElementById("displayGuardianEmail").textContent = profileData.guardianEmail;

        if (imageSrc) {
          previewPic.src = imageSrc;
          profileData.image = imageSrc;
        }

        localStorage.setItem('myProfile', JSON.stringify(profileData));
      };

      if (file) {
        reader.onload = function (e) {
          updateDisplay(e.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        const existing = JSON.parse(localStorage.getItem('myProfile'));
        updateDisplay(existing?.image || "");
      }
    }