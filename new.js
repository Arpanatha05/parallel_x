// medicine add part
let total = 0;

    function addMedicine() {
      const name = document.getElementById("medName").value;
      const dose = document.getElementById("dosage").value;
      const time = document.getElementById("time").value;

      if (!name || !dose || !time) {
        alert("Please fill in all fields");
        return;
      }

      total++;
      document.getElementById("totalMeds").textContent = total;
      document.getElementById("upcomingDoses").textContent = total;

      const medList = document.getElementById("medList");
      const item = document.createElement("div");
      item.className = "medicine-item";
      item.innerHTML = `
        <div class="info">
          <strong>${name}</strong><br>
          Dosage: ${dose} | Time: ${time}
        </div>
        <span class="delete-btn" onclick="removeMedicine(this)">Delete</span>
      `;
      medList.appendChild(item);

      // Reset form
      document.getElementById("medName").value = '';
      document.getElementById("dosage").value = '';
      document.getElementById("startDate").value = '';
      document.getElementById("endDate").value = '';
      document.getElementById("time").value = '';
    }

    function removeMedicine(el) {
      el.parentElement.remove();
      total--;
      document.getElementById("totalMeds").textContent = total;
      document.getElementById("upcomingDoses").textContent = total;
    }

//chatbot




    