<script setup lang="ts">
import { ref,onMounted } from 'vue';
import loadingImage from '@/assets/loading.gif';
import lbxImage from '@/assets/lbx.png';
import jtImage from '@/assets/it.png';
import mapImage from '@/assets/map.png';
import '@/utils/china.js'
import map from '@/utils/area_echats'
const loadingImg = ref(loadingImage);
const lbxImg = ref(lbxImage);
const jtImg = ref(jtImage);
const mapImg = ref(mapImage);
onMounted(()=>{
    map();
})
</script>
<template>
    <div class="loading">
        <div class="loadbox"> <img :src='loadingImg'> 页面加载中... </div>
    </div>
    <div class="head">
        <h1>大数据可视化平台</h1>
        <div class="weather"><span id="showTime"></span></div>
    </div>
    <div class="mainbox">
        <ul class="clearfix">
            <li>
                <div class="boxall" style="height: 3.2rem">
                    <div class="alltitle">模块标题样式</div>
                    <div class="allnav" id="echart1"></div>
                    <div class="boxfoot"></div>
                </div>
                <div class="boxall" style="height: 3.2rem">
                    <div class="alltitle">模块标题样式</div>
                    <div class="allnav" id="echart2"></div>
                    <div class="boxfoot"></div>
                </div>
                <div class="boxall" style="height: 3.2rem">
                    <div style="height:100%; width: 100%;">
                        <div class="sy" id="fb1"></div>
                        <div class="sy" id="fb2"></div>
                        <div class="sy" id="fb3"></div>
                    </div>
                    <div class="boxfoot">

                    </div>
                </div>
            </li>
            <li>
                <div class="bar">
                    <div class="barbox">
                        <ul class="clearfix">
                            <li class="pulll_left counter">12581189</li>
                            <li class="pulll_left counter">3912410</li>
                        </ul>
                    </div>
                    <div class="barbox2">
                        <ul class="clearfix">
                            <li class="pulll_left">2018年总收入情况 </li>
                            <li class="pulll_left">2018年总支出情况</li>
                        </ul>
                    </div>
                </div>
                <div class="map">
                    <div class="map1"><img :src="lbxImg"></div>
                    <div class="map2"><img :src="jtImg"></div>
                    <div class="map3"><img :src="mapImg"></div>
                    <div class="map4" id="map_1"></div>
                </div>
            </li>
            <li>
                <div class="boxall" style="height:3.4rem">
                    <div class="alltitle">模块标题样式</div>
                    <div class="allnav" id="echart4"></div>
                    <div class="boxfoot"></div>
                </div>
                <div class="boxall" style="height: 3.2rem">
                    <div class="alltitle">模块标题样式</div>
                    <div class="allnav" id="echart5"></div>
                    <div class="boxfoot"></div>
                </div>
                <div class="boxall" style="height: 3rem">
                    <div class="alltitle">模块标题样式</div>
                    <div class="allnav" id="echart6"></div>
                    <div class="boxfoot"></div>
                </div>
            </li>
        </ul>
    </div>
    <div class="back"></div>
</template>
