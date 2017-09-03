    var scwLanguage = 'tw';

	function scwSetLanguage()
		{switch (scwLanguage)
			{case 'tw':
				//  Chinese Traditional
				scwToday               = '今天:';
				scwDrag                = '點擊此處拖曳';
				scwArrMonthNames       = ['一','二','三','四','五','六',
										  '七','八','九','十','十一','十二'];
				scwArrWeekInits        = ['日','一','二','三','四','五','六'];
				scwInvalidDateMsg      = '輸入日期有誤.\n';
				scwOutOfRangeMsg       = '日期超出范圍.';
				scwDoesNotExistMsg     = '日期並不存在.';
				scwInvalidAlert        = ['日期有誤 (',') 忽略.'];
				scwDateDisablingError  = ['錯誤 ',' 不是一個日期物件.'];
				scwRangeDisablingError = ['錯誤 ',' should consist of two elements.'];
				break;

			 default:
				// English
				scwToday               = 'Today:';
				scwDrag                = 'click here to drag';
				scwArrMonthNames       = ['Jan','Feb','Mar','Apr','May','Jun',
										  'Jul','Aug','Sep','Oct','Nov','Dec'];
				scwArrWeekInits        = ['S','M','T','W','T','F','S'];
				scwInvalidDateMsg      = 'The entered date is invalid.\n';
				scwOutOfRangeMsg       = 'The entered date is out of range.';
				scwDoesNotExistMsg     = 'The entered date does not exist.';
				scwInvalidAlert        = ['Invalid date (',') ignored.'];
				scwDateDisablingError  = ['Error ',' is not a Date object.'];
				scwRangeDisablingError = ['Error ',' should consist of two elements.'];
			}
		}
