import './ExcRate.css';

// 구글 환율계산기 참고
// '환율'은 excRate로 명명
function ExcRate() {
	return (
		<>
			{/* 환율계산기 */}
			<div className='excRateConv'>
				<div className='mainCrcN'>
					{/* 기준 국가 및 통화 선택 */}
					<input type='text' list='mainCrcChoice' />
				</div>
				<div className='amount_before'>
					{/* 계산 전 금액 입력 받기 - 단위 표시 */}
				</div>
				<div>
					{/* 환전 기호 */}
				</div>
				<div className='excCrcN'>
					{/* 교환 국가 및 통화 선택 */}
				</div>
				<div className='amount_after'>
					{/* 계산 후 금액 자동 출력 - 단위 표시 */}
				</div>
			</div>
			{/* 환율그래프 */}
			<div className='excRateGraph'>

			</div>
		</>
	);
}

export default ExcRate;
