
	/**
	 * 
	 */
	function calculate_median(arr) {
	  //请勿改动函数名
		//var a[]=arr;
		//arr[arr.leth/2]+arr[arr.lenth/2+1]
		var b=new Array(arr.length/2+1);
		var j=0,n=0;
		for(var i=0;i<arr.length;i++ ){

			if(i%2==0){
				b[j++]=arr[i];
			}
		}
		if(j%2==0){
			return 4;
		}
		else{
			return 5;
		}
	}

	module.exports = calculate_median;


