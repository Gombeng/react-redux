import moment from 'moment';
export default function Table({ isLoading, categoryData, handleDelete }) {
	return (
		<table className="table table-striped table-hover">
			<thead>
				<tr>
					<th>No</th>
					<th>Name</th>
					<th>Status</th>
					<th>Updated at</th>
					<th style={{ width: '13rem' }}>Action</th>
				</tr>
			</thead>
			<tbody>
				{isLoading ? (
					<tr className="text-center">
						<th colSpan={5}>Loading...</th>
					</tr>
				) : !categoryData?.length ? (
					<tr className="text-center">
						<th colSpan={5}>No Data</th>
					</tr>
				) : (
					categoryData?.map((e, i) => (
						<tr key={e.id}>
							<th>{i + 1}</th>
							<td>{e.name}</td>
							<td>{e.is_active ? 'Active' : 'Inactive'}</td>
							<td>{moment(e.updated_at).calendar()}</td>
							<td>
								<button className="btn btn-warning p-2 px-4 me-2">Edit</button>
								<button
									className="btn btn-danger p-2 px-4"
									onClick={() => handleDelete(e)}
								>
									Delete
								</button>
							</td>
						</tr>
					))
				)}
			</tbody>
		</table>
	);
}
