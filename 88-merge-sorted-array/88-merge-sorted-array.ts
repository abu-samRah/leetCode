function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  var insertPositionOfNums1 = m + n - 1;
  m -= 1;
  n -= 1;
  while (n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[insertPositionOfNums1] = nums1[m];
      m -= 1;
    } else {
      nums1[insertPositionOfNums1] = nums2[n];
      n -= 1;
    }
    insertPositionOfNums1 -= 1;
  }
}