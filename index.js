function moveSelected(direction) {
    const from = document.getElementById(direction === "right" ? "left-section" : "right-section");
    const to = document.getElementById(direction === "right" ? "right-section" : "left-section");

    from.querySelectorAll("input[type='checkbox']:checked").forEach((checkbox) => {
      const label = checkbox.closest("label");
      checkbox.checked = false;
      to.appendChild(label);
    });
}

  function moveAll(direction) {
    const from = document.getElementById(direction === "right" ? "left-section" : "right-section");
    const to = document.getElementById(direction === "right" ? "right-section" : "left-section");

    from.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
      const label = checkbox.closest("label");
      checkbox.checked = false;
      to.appendChild(label);
    });
}