function sortByDate(data) {
    data.sort(function(a, b){
        a = a.node.frontmatter.date.split('/').reverse().join('')
        b = b.node.frontmatter.date.split('/').reverse().join('')
        return a > b ? -1 : a < b ? 1 : 0
    })
}

export default sortByDate

