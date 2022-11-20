import './ExcRate.css';

// 구글 환율계산기 참고
// '환율'은 excRate로 명명

const crcOptions = [
	{ value: "KRW", name: "한국 KRW" },
	{ value: "USD", name: "미국 USD" },
	{ value: "JPY", name: "일본 JPY" },
	{ value: "CNY", name: "중국 CNY" },
	{ value: "EUR", name: "독일 EUR" },
	{ value: "GBP", name: "영국 GBP" },
]

const SelectBox = (props) => {
	return (
		<select>
			{/* defaultValue 적용 필요 */}
			{props.options.map((option) => (
				<option value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	)
}

function ExcRate() {

	return (
		<>
			<div className='excRateConv'>
				환율계산기
				<form>
					<div className='mainCrcN'>
						{/* 기준 국가 및 통화 선택 */}
						<SelectBox options={crcOptions}></SelectBox>
					</div>
					<div className='amount_before'>
						{/* 계산 전 금액 입력 받기 - 단위 표시 */}
						{/* 텍스트 타입으로 숫자만 입력받게 하기 */}
						<input type="text" />
					</div>
					<div className='operator'>
						<input type='submit' value='계산'/>
					</div>
				</form>
				<div className='excCrcN'>
					{/* 교환 국가 및 통화 선택 */}
					<SelectBox options={crcOptions}></SelectBox>
				</div>
				<div className='amount_after'>
					{/* onChange */}
					{/* 계산 후 금액 자동 출력 - 단위 표시 */}
					{/* 계산결과 출력만 하도록 만들기 */}
					<input type='text' placeholder='자동출력'/>
				</div>
			</div>
			{/* 모바일에서는 아래로 가도록 함수 적용 필요 */}
			<div className='excRateGraph'>
				환율그래프 위치
			</div>
		</>
	);
}

export default ExcRate;
