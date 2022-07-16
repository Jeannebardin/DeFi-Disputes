const output = require('../../../godaddyData')
const db = require('../db')

exports.seed = async function() {
  await db.deleteEverythingBeware()

  const allTheWork = output.map(async (obj) => {
    const formattedObj = {
      title: obj.title,
      snippet: obj.content,
      date_created: obj.date,
      paragraphs: obj.full_text,
    }

    const idArr = await db.addgodaddyPost(formattedObj)
    const postId = idArr[0]

    let catIdsArr = obj.categories.map(async (name) => {
      const cat = await db.getCatIdByName(name)
      if (!cat) console.log(obj.title, name)
      return cat?.id
    })

    catIdsArr = await Promise.all(catIdsArr)

    const joinTableInsert = catIdsArr.map(async (c_id) => {
      return await db.addTogodaddyPosts_categories(postId, c_id)
    })

    return await Promise.all(joinTableInsert)
  })
  await Promise.all(allTheWork)
  db.endConnection()
}

