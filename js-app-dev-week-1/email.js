// (session 2 homework)

/
// Gmail
//  Compose
//   system labels
//     Inbox
//     Starred
//     Snoozed
//     Sent
//     Drafts
//   More/Less
//     Important
//     Chats
//     All Mail
//     Spam
//     Trash
//
//     Categories
//       Categories
//       social
//       updates
//       forums
//       promotions
//
//   manage labels
//   create new label
//
//

var appGmailData = {
  name: 'Gmail',
  action: ['Compose','More/Less','Manage Labels', 'Create New Labels'],
  systemLabels: [
    'Inbox', {
      is: ['Starred','Important']
    }, {
      in: ['Snoozed','Sent','Drafts','Chats','Spam','Trash']
    },
    'All Mails'
    ],
  categories: [ 'Social', 'Updates','Forums','Promotions']
}

console.log(appGmailData.action[3]);
console.log(appGmailData.systemLabels[1]);
console.log(appGmailData.systemLabels[2].in.length);
console.log(appGmailData.systemLabels[2].in[5]);
