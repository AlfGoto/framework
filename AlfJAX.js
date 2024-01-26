//AlfJAX
/**
 * AJAX POST request using JSON
 * @param {string} url target. "folder/exemple.php"
 * @param {Object} [optional] data to send. {key1: value1, key2: value2}
 * @param {function} [optional] function to do when success, arg will be the response. (e)=>{console.log(e)}
 */
function alfjax(url, data = {}, success = () => { console.log('AlfJAX was successful') }) {
    data = Object.keys(data).map(function (key) { return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]); }).join('&');
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
    xhr.send(data);
    xhr.onload = function (e) {
        if (xhr.statusText == 'OK') {
            success(JSON.parse(xhr.response))
        } else {
            console.error(xhr.statusText)
        }
    }
}
