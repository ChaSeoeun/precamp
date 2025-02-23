const email = "ramsol40@gmail.com"
// undefined
email.includes("@")
// true
email.split("@")
// (2)?['ramsol40', 'gmail.com']
email.split("@")[0]
// 'ramsol40'
email.split("@")[1]
// 'gmail.com'
let userEmail = email.split("@")[0]
// undefined
userEmail
// 'ramsol40'
let company = email.split("@")[1]
// undefined
company
// 'gmail.com'
let maskingMail = []
// undefined
maskingMail.push(userEmail[0])
// 1
maskingMail.push(userEmail[1])
// 2
maskingMail.push(userEmail[2])
// 3
maskingMail.push(userEmail[3])
// 4
maskingMail
// (4)?['r', 'a', 'm', 's']
maskingMail.push("*")
// 5
maskingMail.push("*")
// 6
maskingMail.push("*")
// 7
maskingMail.push("*")
// 8
maskingMail
// (8)?['r', 'a', 'm', 's', '*', '*', '*', '*']
maskingMail.join("")
// 'rams****'
maskingMail.join("") + "@" + company
// 'rams****@gmail.com'
let result = maskingMail.join("") + "@" + company
// undefined
result
// 'rams****@gm/ail.com'