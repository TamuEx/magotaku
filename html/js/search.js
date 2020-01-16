//ログインメニューの表示
document.getElementById("rogin_form").style.visibility = "hidden";
document.getElementById("rogin_nav").onclick = function () {
    document.getElementById("rogin_form").style.visibility = "visible";
}
// ログインメニューを閉じる
document.getElementById("close_item").onclick = function () {
    document.getElementById("rogin_form").style.visibility = "hidden";
}

// SEARCH TASK
var searchTask = document.getElementById("search_task");
searchTask.addEventListener("click", function(){
    let text = document.getElementById("search").value;
	let str = {
		'search_task':text, 
	};
	let json = JSON.stringify(str);
	let req = new XMLHttpRequest();
	req.open('POST', 'https://citron-tree.jp/private/magotaku_tmp/task_search.php', true);
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send(json);
	req.onload=function(){
		var jsonText = req.responseText;
		var returnText = JSON.parse(jsonText);
		alert(returnText);
		console.log(returnText);
	}
})