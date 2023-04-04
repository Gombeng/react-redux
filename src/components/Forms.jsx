export default function Forms({ label, value, readonly, disabled }) {
	return (
		<div>
			<label className="form-label">{label}</label>
			<input
				class="form-control"
				type="text"
				value={value}
				aria-label="Disabled input example"
				readonly={readonly}
				disabled={disabled}
			/>
		</div>
	);
}
