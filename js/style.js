var timer=null;
		function move(iTarget)
		{
			var oDiv=document.getElementById('p1');

			clearInterval(timer);
			timer=setInterval(function()
				{
					var speed=0;
					if (oDiv.offsetLeft<iTarget) 
					{
						speed=50;//速度除不尽 到位置会一直抖
					}else
					{
						speed=-50;
					}
					if (Math.abs(iTarget-oDiv.offsetLeft)<=10) //Math.abs 取绝对值
					{
						clearInterval(timer);

						oDiv.style.left=iTarget+'px';//没有这个 还是不会到 会差一点 所以直接让它等于iTarget
					}
					else{
					oDiv.style.left=oDiv.offsetLeft+speed+'px';
				}
				}, 30);
		}
	
			
	