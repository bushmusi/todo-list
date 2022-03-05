const domContainer = () => {
  document.body.innerHTML = `
    <ul id="list-cont">
                <li class="list-header prev-item">
                    <h2>Today</h2>
                    <a href="javascript:void(0)" id="refresh-link"><i class="fa fa-refresh"></i></a>
                </li>
                <li class="input-box prev-item">
                    <form id="form-field">
                        <input type="text" name="desc" id="input-field" placeholder="Add to your list..." autofocus="">
                        <button type="submit" id="add-item-btn"><i class="fa fa-plus-square" aria-hidden="true"></i></button>
                    </form>
                </li>
            <li class="todo-item" id="li-1"><input type="checkbox" class="checkbox-item" id="checkbox-1" checked="true"><label id="label-1" class="label-item"><h4 id="text-id-1" style="text-decoration: none;">Task 1</h4></label><i id="option-1" class="fa fa-ellipsis-v option-menu"> </i></li></ul>
    `;
};
export default domContainer;