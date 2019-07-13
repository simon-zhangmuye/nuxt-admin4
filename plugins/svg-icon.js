// plugins/global-components.js
import Vue from 'vue'
import svgIcon from '~/components/SvgIcon'

Vue.component('svg-icon', svgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('~/assets/icons/svg', false, /\.svg$/)
requireAll(req)
console.log(requireAll(req))


