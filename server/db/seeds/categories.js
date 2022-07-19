

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Categories').del()
  await knex('Categories').insert([
    {id: 1, category_name: 'AML', type: 'Topic'},
    {id: 2, category_name: 'Australia', type: 'Jurisdiction'},
    {id: 3, category_name: 'Litigation', type: 'Topic'},
    {id: 4, category_name: 'Regulation', type: 'Topic'},
    {id: 5, category_name: 'Sanctions', type: 'Topic'},
    {id: 6, category_name: 'Staking', type: 'Topic'},
    {id: 7, category_name: 'Japan', type: 'Jurisdiction'},
    {id: 8, category_name: 'CFTC', type: 'Topic'},
    {id: 9, category_name: 'CBDC', type: 'Topic'},
    {id: 10, category_name: 'China', type: 'Jurisdiction'},
    {id: 11, category_name: 'Court', type: 'Topic'},
    {id: 12, category_name: 'Custody', type: 'Topic'},
    {id: 13, category_name: 'DAO', type: 'Topic'},
    {id: 14, category_name: 'DOJ', type: 'Topic'},
    {id: 15, category_name: 'DeFi', type: 'Topic'},
    {id: 16, category_name: 'Decentralization', type: 'Topic'},
    {id: 17, category_name: 'EU', type: 'Topic'},
    {id: 18, category_name: 'Exchange', type: 'Topic'},
    {id: 19, category_name: 'CeFi', type: 'Topic'},
    {id: 20, category_name: 'FATF', type: 'Topic'},
    {id: 21, category_name: 'Fincen', type: 'Topic'},
    {id: 22, category_name: 'Hong Kong', type: 'Jurisdiction'},
    {id: 23, category_name: 'Korea', type: 'Jurisdiction'},
    {id: 24, category_name: 'Lending', type: 'Topic'},
    {id: 25, category_name: 'Licensing', type: 'Topic'},
    {id: 26, category_name: 'Market integrity', type: 'Topic'},
    {id: 27, category_name: 'Mining', type: 'Topic'},
    {id: 28, category_name: 'NFTs', type: 'Topic'},
    {id: 29, category_name: 'SEC', type: 'Topic'},
    {id: 30, category_name: 'Security', type: 'Topic'},
    {id: 31, category_name: 'Singapore', type: 'Topic'},
    {id: 32, category_name: 'Smart contracts', type: 'Topic'},
    {id: 33, category_name: 'Stablecoins', type: 'Topic'},
    {id: 34, category_name: 'Stock Tokens', type: 'Topic'},
    {id: 35, category_name: 'Switzerland', type: 'Jurisdiction'},
    {id: 36, category_name: 'Tax', type: 'Topic'},
    {id: 37, category_name: 'UK', type: 'Jurisdiction'},
    {id: 38, category_name: 'US regulation', type: 'Jurisdiction'},
    {id: 39, category_name: 'Venture Capital', type: 'Topic'},
    {id: 40, category_name: 'ICOs', type: 'Topic'},
    {id: 41, category_name: 'Bitcoin', type: 'Topic'},
    {id: 42, category_name: 'Ethereum', type: 'Topic'},
    {id: 43, category_name: 'AMM', type: 'Topic'},
    {id: 44, category_name: 'DEX', type: 'Topic'},
    {id: 45, category_name: 'ETF', type: 'Topic'},
    {id: 46, category_name: 'Governance Tokens', type: 'Topic'},
    {id: 47, category_name: 'Oracles', type: 'Topic'},
    {id: 48, category_name: 'Yield Farming', type: 'Topic'},
    {id: 49, category_name: 'Meme Coins', type: 'Topic'},
    {id: 50, category_name: 'Web 3', type: 'Topic'},
    {id: 51, category_name: 'Derivative', type: 'Topic'}

  ]);
};






