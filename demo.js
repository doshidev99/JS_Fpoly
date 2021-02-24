 /* 
        Sử dụng prompt và Promise để thực hiện yêu cầu sau:  
        1. Nhập họ và tên sinh viên
        2. Nhập tên môn học đang được học (chỉ nhập 1 môn)
        Mỗi môn học sinh viên sẽ cần nhập điểm thành phần chia làm 4 giai đoạn:
          ● Lab 1 (Nhập ngay sau khi nhập tên và môn học) - chiếm 10%
          ● Lab 2 (Nhập sau khi nhập điểm lab 1 thời gian 3s) - chiếm 20%
          ● Lab 3 (Nhập sau khi nhập điểm lab 2 thời gian 4s) - chiếm 30%
          ● Thi Final (Nhập sau khi nhập điểm lab 3 thời gian 3s) - chiếm 40%
				Sau khi nhập hết toàn bộ số điểm hãy tính điểm trung bình của sinh viên    
       */

			//  1 -> (3s) -> step2 (4s) => step 3(3s);
			// value each others step -> value1 , value2, value3;
			// Promise 

