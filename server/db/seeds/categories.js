

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Categories').del()
  await knex('Categories').insert([
    {id: 1, category_name: 'AML', type: 'something'},
    {id: 2, category_name: 'Australia'},
    {id: 3, category_name: 'Litigation'},
    {id: 4, category_name: 'Regulation'},
    {id: 5, category_name: 'Sanctions'},
    {id: 6, category_name: 'Staking'},
    {id: 7, category_name: 'Japan'},
    {id: 8, category_name: 'CFTC'},
    {id: 9, category_name: 'CBDC'},
    {id: 10, category_name: 'China'},
    {id: 11, category_name: 'Court'},
    {id: 12, category_name: 'Custody'},
    {id: 13, category_name: 'DAO'},
    {id: 14, category_name: 'DOJ'},
    {id: 15, category_name: 'DeFi'},
    {id: 16, category_name: 'Decentralisation'},
    {id: 17, category_name: 'EU'},
    {id: 18, category_name: 'Exchange'},
    {id: 19, category_name: 'CeFi'},
    {id: 20, category_name: 'FATF'},
    {id: 21, category_name: 'Fincen'},
    {id: 22, category_name: 'Hong Kong'},
    {id: 23, category_name: 'Korea'},
    {id: 24, category_name: 'Lending'},
    {id: 25, category_name: 'Licensing'},
    {id: 26, category_name: 'Market integrity'},
    {id: 27, category_name: 'Mining'},
    {id: 28, category_name: 'NFTs'},
    {id: 29, category_name: 'SEC'},
    {id: 30, category_name: 'Security'},
    {id: 31, category_name: 'Singapore'},
    {id: 32, category_name: 'Smart contracts'},
    {id: 33, category_name: 'Stablecoins'},
    {id: 34, category_name: 'Stock Tokens'},
    {id: 35, category_name: 'Switzerland'},
    {id: 36, category_name: 'Tax'},
    {id: 37, category_name: 'UK'},
    {id: 38, category_name: 'US regulation'},
    {id: 39, category_name: 'Venture Capital'},
    {id: 40, category_name: 'ICOs'},
    {id: 41, category_name: 'Bitcoin'},
    {id: 42, category_name: 'Ethereum'},
    {id: 43, category_name: 'AMM'},
    {id: 44, category_name: 'DEX'},
    {id: 45, category_name: 'ETF'},
    {id: 46, category_name: 'Governance Tokens'},
    {id: 47, category_name: 'Oracles'},
    {id: 48, category_name: 'Yield Farming'},
    {id: 49, category_name: 'Meme Coins'},
    {id: 50, category_name: 'Web 3'},
    {id: 51, category_name: 'Derivative'}

  ]);
};






