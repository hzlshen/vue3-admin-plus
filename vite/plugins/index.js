import vue from '@vitejs/plugin-vue'

import createAutoImport from './auto-import'
import createSvgIcon from './svg-icon'
import createCompression from './compression'
import createSetupExtend from './setup-extend'
import {
    viteMockServe
} from 'vite-plugin-mock'
import chunkSplitPlugin from 'vite-plugin-chunk-split';


export default function createVitePlugins(viteEnv, isBuild = false) {
    const vitePlugins = [vue()]
    vitePlugins.push(createAutoImport())
    vitePlugins.push(createSetupExtend())
    vitePlugins.push(createSvgIcon(isBuild))
    vitePlugins.push(viteMockServe({
        supportTs: true
    }))
    vitePlugins.push(chunkSplitPlugin({
        customSplitting: {
        // 自定义分割逻辑，例如基于文件或模块名称进行分割
            element: ['element-plus']
        }
    }))
    isBuild && vitePlugins.push(...createCompression(viteEnv))
    return vitePlugins
}