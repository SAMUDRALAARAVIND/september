function closeModal() {
  const modal = document.getElementById("modal");
  modal.remove();
}
/**
 * <div class="modal" id="modal">
      <div class="modal-body">
        <button onclick="closeModal()">Close</button>
        <input type="text" /><input type="text" /><input type="text" /><input
          type="text"
        />
        <button>Submit</button>
      </div>
    </div>
 */

function showPopup() {
  const modal = document.createElement("div");
  modal.id = "modal";
  modal.className = "modal";

  const modalBody = document.createElement("div");
  modalBody.className = "modal-body";

  const closeModalButton = document.createElement("button");
  closeModalButton.onclick = closeModal;
}
