//source :https://leetcode-cn.com/problems/reverse-integer/description/
//author:liulian
//date:2018.5.19


var reverseint = function(x){

				var min = -Math.pow(2,31);
				var max = Math.pow(2,31)-1;
				var ans;
				var arr = x.toString().split('');
				if(x<0)
					arr.shift()
				ans = arr.reverse().join('');
				if(x<0)
					ans = ans*-1;
				if(ans<min || ans>max)
					return 0;
				else

					return ans
				
			}