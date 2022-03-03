const fetchCurrentItems = (id) => {
  const currentCheckbox = document.getElementById(`checkbox-${id}`);
  const checkboxVal = currentCheckbox.checked;

  const currentDesc = document.getElementById(`text-id-${id}`);
  const currentDescVal = currentDesc.textContent;

  const summarizObj = {
    description: currentDescVal,
    completed: checkboxVal,
    index: id,
  };

  return summarizObj;
};

export default fetchCurrentItems;