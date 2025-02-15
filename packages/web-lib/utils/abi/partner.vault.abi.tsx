const PARTNER_VAULT_ABI = [
	{
		'anonymous': false,
		'inputs': [
			{
				'indexed': true,
				'internalType': 'address',
				'name': 'partnerId',
				'type': 'address'
			}, {
				'indexed': true,
				'internalType': 'address',
				'name': 'vault',
				'type': 'address'
			}, {
				'indexed': true,
				'internalType': 'address',
				'name': 'depositer',
				'type': 'address'
			}, {
				'indexed': false,
				'internalType': 'uint256',
				'name': 'amountAdded',
				'type': 'uint256'
			}, {
				'indexed': false,
				'internalType': 'uint256',
				'name': 'totalDeposited',
				'type': 'uint256'
			}
		],
		'name': 'ReferredBalanceIncreased',
		'type': 'event'
	}, {
		'inputs': [
			{
				'internalType': 'address',
				'name': 'vault',
				'type': 'address'
			}, {
				'internalType': 'address',
				'name': 'partnerId',
				'type': 'address'
			}, {
				'internalType': 'uint256',
				'name': 'amount',
				'type': 'uint256'
			}
		],
		'name': 'deposit',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256'
			}
		],
		'stateMutability': 'nonpayable',
		'type': 'function'
	}, {
		'inputs': [
			{
				'internalType': 'address',
				'name': '',
				'type': 'address'
			}, {
				'internalType': 'address',
				'name': '',
				'type': 'address'
			}, {
				'internalType': 'address',
				'name': '',
				'type': 'address'
			}
		],
		'name': 'referredBalance',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	}
] as const;

export default PARTNER_VAULT_ABI;
