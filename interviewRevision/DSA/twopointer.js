function diffOfK(k, arr) {
  var first = 0;
  var second = 0;
  while (first < arr.length && second < arr.length) {
    let temp = arr[second] - arr[first];
    if (temp == k && first != second) {
      return "Yes";
    } else if (temp < k) {
      second++;
    } else {
      first++;
    }
  }
  return "No";
}
console.log(diffOfK(3, [1, 2, 3, 5, 7]));


//.......................................................
function twoArray(arr1, arr2) {
    let n=arr1.length
  var first = 0;
  var second = n - 1;
  var count = 0;
  while (first < n && second >= 0) {
    if (a[first] < b[second]) {
      first++;
    } else if (b[second] < a[first]) {
      second--;
    } else {
      count++;

      first++;

      second--;
    }
  }
  console.log(count);
}

twoArray()