var readlinessync = require('readline-sync')
module.exports = {

sort(nums, left, right) {

    // var left = 0;
    // var right = nums.length;
    if (left < right) {
        // Find the middle point
        var mid = parseInt((left + right) / 2);

        // Sort first halve
        console.log("Mid " + mid);
        // console.log(this.sort(nums, left, mid));
                // console.log(this.sort(nums, mid + 1, right));
                // this.sort()
                this.sort(nums, left, mid)
                this.sort(nums, mid+1,right)

        // Sort second halve
        nums = this.merge(nums, left, mid, right);


    }
    // Merge the sorted halves
    return nums;
},

merge(nums, left, mid, right) {
    console.log("Nums " + nums);
    console.log("Left Value " + left);
    console.log("m " + mid);
    console.log("right " + right);
    
    var leftarray=[];
    var rightarray=[];
    var mergearray=[];
    var i,k=0;

        //copying left half of array in leftarray
        for(i=left;i<=mid;i++)
        leftarray[k++]=nums[i];
    
//        console.log("Left Array:"+leftarray.join(" "));
               //copying right half of array in rightarray    
       k=0;
       for (i = mid+1; i <= right; i++) 
       rightarray[k++]= nums[i];

//       console.log("Right Array:"+rightarray.join(" "));

    i=j=0;       
    k=left;   
    var merge_array_index=0;
    while (i < leftarray.length && j < rightarray.length) 
    { 
        if (leftarray[i] <= rightarray[j]) 
        { 
            nums[k] = leftarray[i];
            mergearray[merge_array_index++]=leftarray[i]; 
            i++; 
        } 
        else
        { 
            nums[k] = rightarray[j]; 
            mergearray[merge_array_index++]=rightarray[j];             
            j++; 
        } 
        k++; 
    }//end of while 

/* Copy the remaining elements of L[], if there 
   are any */
while (i < leftarray.length) 
{ 
    nums[k] = leftarray[i]; 
    mergearray[merge_array_index++]=leftarray[i]; 
    i++; 
    k++; 
} 

/* Copy the remaining elements of R[], if there 
   are any */
while (j < rightarray.length) 
{ 
    nums[k] = rightarray[j]; 
    mergearray[merge_array_index++]=rightarray[j]; 
    j++; 
    k++; 
} 

//console.log("The Merged Array :"+mergearray.join(" "))

        return nums;
}//end of divide_array
}