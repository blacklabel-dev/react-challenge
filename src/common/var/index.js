function importAll(r) {
  return r.keys().map(r)
}

// Import all model-const vars on initial loading of app
const allVars = {}
const allImported = importAll(require.context("./", true, /\.(json)$/))
allImported.forEach(r => {
  Object.keys(r).forEach(k => {
    allVars[k] = r[k]
  })
})

export const varList = (varname) => {
  let vars = []
  
  if (allVars[varname]) {
    return allVars[varname]
  }

  return vars
}