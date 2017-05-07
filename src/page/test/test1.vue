<template>
    <s-view-box showCurrentBreadcrumb class="stock">
        <div slot="header_right">
            <div style="display: inline-block;position: absolute; right:0;">
                <el-input placeholder="请输入内容" v-model="skeys" style="width: 300px;" @keyup.native.enter='searchData'>
                    <el-button slot="append" icon="search" @click.native='searchData'></el-button>
                </el-input>
            </div>
        </div>
        <div>
            <div style='height: 70px;'>
                <el-form :inline="true" :model="form" ref="form" class="s-form-noerror" label-width="40px" label-position="left">
                    <el-row :gutter="5">
                        <el-col :span="5">
                            <el-form-item label="仓店" style="width: 100%;">
                                <el-input v-model="form.storeName" placeholder="点击选择" @click.native="openSelDialog('选择仓店','store')" size="small" style="width:100%"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item label="品牌" style="width: 100%;">
                                <el-select  size="small" v-model="form.brand">
                                    <el-option :label="brand.name" :value="brand.id" v-for="brand in brandStore"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item label="库存" style="width: 100%;">
                                <el-select size="small" v-model="form.s_num">
                                    <el-option label="全部" :value="2"></el-option>
                                    <el-option label="有" :value="0"></el-option>
                                    <el-option label="无" :value="1"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item label="在途" style="width: 100%;">
                                <el-select size="small" v-model="form.o_num">
                                    <el-option label="全部" :value="2"></el-option>
                                    <el-option label="有" :value="0"></el-option>
                                    <el-option label="无" :value="1"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item class="s-checkbox-item" style="width: 100%; padding-top: 5px;">
                                <el-checkbox v-model="form.sizeView" size="small">尺码视图</el-checkbox>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="5">
                        <el-col :span="5">
                            <el-form-item label="年份" style="width: 100%;">
                                <el-date-picker v-model="form.year" align="right" type="year" placeholder="选择年" size="small" style="width: 100%;"> </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item label="季节" style="width: 100%;">
                                <el-select  size="small" v-model="form.season">
                                    <el-option :label="season.name" :value="season.id" v-for="season in seasonStore"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item label="波段" style="width: 100%;">
                                <el-input v-model="form.bandName" placeholder="点击选择" @click.native="openSelDialog('选择仓店','band')" size="small" style="width:100%"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item label="品类" style="width: 100%;">
                                <el-input v-model="form.categoryName" placeholder="点击选择" @click.native="openSelDialog('选择仓店','category')" size="small" style="width:100%"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-button type="primary" icon="search"  @click.native="searchData" size="small">查询</el-button>
                            <a style="height:30px;margin-left:10px;line-height: 30px;color: #1596ad;cursor: pointer;" @click="doExcel">
                                <i class="el-icon-upload2"></i>
                                <span>导出</span>
                            </a>
                        </el-col>
                    </el-row>
                </el-form>
            </div>

            <s-table :dataSource="dataSource" :summary="tableSummary" :defaultQuery="tableQuery" ref="table" :height="tableHeight" responseData="list">
                <template v-if='viewType==0'>
                    <el-table-column type='index' label='#' width='60' :resizable="false"></el-table-column>
                    <el-table-column prop='skuCode' label='商品编号' width='150' :sortable='true' :resizable="false">
                        <template scope="scope">
                            <el-button @click="showDetail(scope.row)" type="text" size="small">{{scope.row.skuCode}}</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column prop='styleName' label='款式名称' width='120' :sortable='true' :resizable="true" :context="_self">
                    </el-table-column>
                    <el-table-column prop='storeName' label='仓店' width='120' :sortable='true' :resizable="false">
                    </el-table-column>
                    <el-table-column prop='colorId' label='颜色' width='100' :sortable='true' :resizable="false" :formatter='formatData'></el-table-column>
                    <el-table-column prop='sizeId' label='尺码' width='70' :sortable='true' :resizable="false" :formatter='formatData'></el-table-column>
                    <el-table-column prop='s_num' label='库存数' width='85' :sortable='true' :resizable="false"></el-table-column>
                    <el-table-column prop='o_num' label='在途数' width='85' :sortable='true' :resizable="false"></el-table-column>
                    <el-table-column prop='brand' label='品牌' width='100' :sortable='true' :resizable="false" :formatter='formatData'></el-table-column>
                    <el-table-column prop='year' label='年份' width='70' :sortable='true' :resizable="false"></el-table-column>
                    <el-table-column prop='season' label='季节' width='70' :sortable='true' :resizable="false" :formatter='formatData'></el-table-column>
                    <el-table-column prop='category' label='品类' width='100' :sortable='true' :resizable="false" :formatter='formatData'></el-table-column>
                    <el-table-column prop='band' label='波段' width='100' :sortable='true' :resizable="false" :formatter='formatData'></el-table-column>
                    <el-table-column prop='tagSum' label='吊牌金额' width='110' :sortable='true' :resizable="false" :formatter='numberFormatter'></el-table-column>
                </template>
                <template v-else>
                    <el-table-column type='index' label='#' width='60' :resizable="false"></el-table-column>
                    <el-table-column prop='styleCode' label='款式编号' width='150' :sortable='true' :resizable="false"></el-table-column>
                    <el-table-column prop='styleName' label='款式名称' width='120' :sortable='true' :resizable="false"></el-table-column>
                    <el-table-column prop='storeName' label='仓店' width='120' :sortable='true' :resizable="false"></el-table-column>
                    <el-table-column prop='colorId' label='颜色' width='100' :sortable='true' :resizable="false" :formatter='formatData'></el-table-column>
                    <!--<el-table-column label="尺码" header-align='center' :resizable="false" >-->
                    <el-table-column :prop='item.prop' :label='item.label' :width='item.width' :sortable='item.sortable' :resizable='item.resizable' v-for='item in sizeColumns' :formatter='formatData2'></el-table-column>
                    <!--</el-table-column>-->
                    <el-table-column prop='s_num' label='库存数' width='85' :sortable='true' :resizable="false"></el-table-column>
                    <el-table-column prop='o_num' label='在途数' width='85' :sortable='true' :resizable="false"></el-table-column>
                    <el-table-column prop='brand' label='品牌' width='100' :sortable='true' :resizable="false" :formatter='formatData'></el-table-column>
                    <el-table-column prop='year' label='年份' width='70' :sortable='true' :resizable="false"></el-table-column>
                    <el-table-column prop='season' label='季节' width='70' :sortable='true' :resizable="false" :formatter='formatData'></el-table-column>
                    <el-table-column prop='category' label='品类' width='100' :sortable='true' :resizable="false" :formatter='formatData'></el-table-column>
                    <el-table-column prop='band' label='波段' width='100' :sortable='true' :resizable="false" :formatter='formatData'></el-table-column>
                    <el-table-column prop='tagSum' label='吊牌金额' width='110' :sortable='true' :resizable="false" :formatter='numberFormatter'></el-table-column>
                </template>
            </s-table>
        </div>
        <!--dialog-->
        <el-dialog :title="dialog2.title" v-model="dialog2.show" :loading='dialog2.loading'  @close='dialogClose' :size="dialog.size" :show_footer='dialog2.show_footer'>
            <div class="search-date">
                <el-form :inline='false' :model="form1"  ref="form1" class="s-form-noerror" label-width="70px" label-position="left">
                    <el-row style="margin:0 0 20px 0">
                        <el-col :span="10" style="line-height: 16px;padding:0;margin:0">
                            <el-form-item label="查询日期" stytle="line-height:35px">
                                <el-date-picker type="daterange"  placeholder="选择日期范围" :picker-options="pickerOptions0" v-model="form1.su_date" style="width: 100%;" size="small"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8" style="margin-left:15px">
                            <el-button type="primary" icon="search"  @click.native="searchData2" size="small">查询</el-button>
                        </el-col>
                    </el-row>
                </el-form>
                <div class="show-data">
                    <s-table :dataSource="dataSource2"  :defaultQuery="tableQuery2" ref="table2" :height="tableHeight">
                        <el-table-column type="index" algin="center" label="序号" :width="80">
                        </el-table-column>
                        <el-table-column prop="type" algin="center" label="类型" :width="80">
                        </el-table-column>
                        <el-table-column prop="trafficNum" algin="center" label="数量" :width="80">
                        </el-table-column>
                        <el-table-column prop="trafficDate" label="时间" :width="180">
                        </el-table-column>
                        <el-table-column  prop="orderNo" label="单据编号" :width="150">
                        </el-table-column>
                        <el-table-column prop="description" label="备注" :width="180" formatter="showm">
                        </el-table-column>
                    </s-table>
                </div>
            </div>
        </el-dialog>
        <!--dialog-->
    </s-view-box>
</template>
<script>
    import SViewBox  from 'components/common/viewBox'
    import STable  from 'components/common/table'
    import SDialog  from 'components/common/dialog'
    import {SelectMuiltStore,SelectMuiltSupplier,SelectMuiltBand,SelectMuiltCategory} from 'components/dialog'
    import smtutil from 'libs/smtutil'
    export default {
        desc:'新增入库',
        components: {
            SViewBox,STable,SDialog
        },
        created(){
            let me=this
            me.userinfo = this.$store.getters.userInfo
            me.userType = me.userinfo.type
            if (me.userType==1){
                me.form.storeId = me.userinfo.store.id
                me.form.storeName = me.userinfo.store.name
            }
            const weekRange = smtutil.getWeekRange2();
            const weekRange2 = smtutil.getMonthRange2()
            me.form.su_date=[weekRange.beginDate,weekRange.endDate];
            me.form1.su_date=[smtutil.getFormatDate(weekRange2.beginDate.getTime()),smtutil.getFormatDate(weekRange2.endDate.getTime())]

            me.tableQuery={
                storeId:me.form.storeId,
                beginDate:me.form.su_date[0],
                endDate:me.form.su_date[1],
                summary:'1'
            }


            this.getOpetionStore();
        },
        asyncComputed:{
            sizeColumns:{
                get(){
                    return this.$http(this.$urlConfig.size, {
                                method: 'get'
                            }).then((response)=> {
                                let columns = []
                                response.data.forEach(obj=>{
                                columns.push({prop:obj.id,label:obj.name,width:'48',sortable:false,resizable:false})
                })
                    return columns
                });
                },
                default: []
            }
        },
        computed: {
            tableHeight(){
                return this.$store.getters.vbc_height-80
            },
            isShopRule(){
                if (this.userType==1){
                    return true
                }else{
                    return false
                }
            },
            dataSource(){
                return {
                    type:'url',
                    source:this.$urlConfig.stock
                }
            },
            dataSource2(){
                return {
                    type:'url',
                    source:this.$urlConfig.SKUTrafficAccount
                }
            }
        },
        data(){
            return{
                pickerOptions0: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                tableSummary:{
                    show:true,
                    list:[
                        {code:"s_num",name:"库存数",value:0},
                        {code:"o_num",name:"在途数",value:0},
                        {code:"tagSum",name:"吊牌金额",value:0},
                    ]
                },
                size:"tiny",
                dialog: {
                    show: true,
                    loading: false,
                    title: '',

                },
                dialog2: {
                    show:false,
                    loading: false,
                    title: 'dddddd',
                    size:'small',
                    show_footer:false,
                },
                dialogTableVisible:false,
                skeys:'',
                form:{
                    storeId:null,
                    storeName:null,
                    brand:"2",
                    band:null,
                    bandName:null,
                    category:null,
                    categoryName:null,
                    year:"",
                    season:"2",
                    s_num:2,
                    o_num:2,
                    sizeView:false
                },
                form1:{
                    su_date:""
                },
                storeUrl:this.$urlConfig.store,
                selLayoutData:[],
                brandStore:[],
                categoryStore:[],
                bandStore:[],
                yearStore:[
                    {'id':'2014','name':'2014'},
                    {'id':'2015','name':'2015'},
                    {'id':'2016','name':'2016'},
                    {'id':'2017','name':'2017'},
                    {'id':'2','name':'全部'}
                ],
                seasonStore:[],
                selUrl:'',
                viewType:0
            }
        },
        methods:{
            showm(description,row){
                console.log(row)
                return row.storeName
            },
            showDetail(row){
                const weekRange2 = smtutil.getMonthRange2()
                this.form1.su_date=[smtutil.getFormatDate(weekRange2.beginDate.getTime()),smtutil.getFormatDate(weekRange2.endDate.getTime())]
                this.dialog2.show = true;
                console.log(smtutil.getFormatDate(this.form.su_date[1].getTime()))
                console.log(this.form.su_date[1])
                console.log('ssss')
                //this.form1.su_date=[weekRange2.beginDate,weekRange2.endDate]
                this.tableQuery2={
                    skuId:'402880485953e61e0159590a95ce002b',//row.storeId,
                    storeId:'402881405634953601563573dc4900b3',//row.skuId,
                    su_date:['2016-03-21','2017-03-21'],//this.form1.su_date,
                    /*	    		beginDate:smtutil.getFormatDate(this.form1.su_date[0].getTime()),//this.form1.su_date[0],
                     endDate:smtutil.getFormatDate(this.form1.su_date[1].getTime()),*/
                    summary:'1'
                }
                /*		    this.form1.storeId=row.storeId;
                 this.form1.skuId=row.skuId;*/
                console.log(this.tableQuery2);
                console.log('this.tableQuery2');
                console.log(this.dataSource2.source)
                this.$refs.table2.fetchData();
            },
            closeDialog(){
                this.destroyElement()
            },
            dialogClose() {
                this.destroyElement()
                this.dialog.show = false;
            },
            numberFormatter(row,column){
                return  smtutil.numberFormatter(row[column.property],1);
            },
            formatData(row,column){
                if (column.property==='colorId'){
                    return row.colorCode+row.colorName
                }else if (column.property==='sizeId'){
                    return row.sizeName
                }else if (column.property==='brand'){
                    return smtutil.getNameById(this.brandStore,row.brand)
                }else if (column.property==='season'){
                    return smtutil.getNameById(this.seasonStore,row.season)
                }else if (column.property==='category'){
                    return smtutil.getNameById(this.categoryStore,row.category)
                }else if (column.property==='band'){
                    return smtutil.getNameById(this.bandStore,row.band);
                }else{
                    return ''
                }
            },
            formatData2(row,column){
                console.log(row);
                console.log("sss")
                return smtutil.zeroFormatter(row[column.property])
            },
            cancelDialog(){
                me.$msgbox.confirm('注意！取消后此页面的数据将丢失，点击【确定】确认取消，点击【取消】可继续编辑？', '入库取消', {
                    type: 'warning'
                }).then(() => {
                    me.$message({
                    type: 'info',
                    message: '入库已取消'
                });
            }).catch(() => {

                });
            },


            getOpetionStore() {
                let me = this;
                this.$http(this.$urlConfig.brand, {
                    method: 'get'
                }).then(function(response) {
                    response.data.push({'id':'2','name':'全部'});
                    me.brandStore = response.data;
                });
                this.$http(this.$urlConfig.season, {
                    method: 'get'
                }).then(function(response) {
                    response.data.push({'id':'2','name':'全部'});
                    me.seasonStore = response.data;
                });
                this.$http(this.$urlConfig.band, {
                    method: 'get'
                }).then(function(response) {
                    me.bandStore = response.data;
                });
                this.$http(this.$urlConfig.category, {
                    method: 'get'
                }).then(function(response) {
                    me.categoryStore = response.data;
                });
            },
            searchData(){

                this.viewType=this.form.sizeView?1:0
                let year=null;
                if(this.form.year!=""&& typeof this.form.year!="undefined"){
                    year=new Date(this.form.year).getFullYear()
                }
                let query={
                    storeId:this.form.storeId,
                    brand:this.form.brand,
                    band:this.form.band,
                    category:this.form.category,
                    year:year,
                    season:this.form.season,
                    s_num:this.form.s_num,
                    o_num:this.form.o_num,
                    sizeView:this.form.sizeView,
                    searchkey:this.skeys
                }
                this.$refs.table.setQuery(query);
            },
            searchData2(){
//
//	    	let dateRange=this.form1.su_date;
//	    	if(dateRange!=null&&dateRange!=""){
//	    		this.form1.su_date=[weekRange2.beginDate,weekRange2.endDate]
//		    		this.form1.beginDate=smtutil.getFormatDate(this.form1.su_date[0].getTime())
//		    		this.form1.endDate=smtutil.getFormatDate(this.form1.su_date[1].getTime())
//		    	}else{
//		    		this.form.beginDate='';
//		    		this.form.endDate='';
//		    	}
                //console.log(smtutil.getFormatDate(this.form1.su_date2[0].getTime()))
                //smtutil.getFormatDate(this.form1.su_date2[1].getTime())
//	    	this.form1.searchkey=this.skey2s
                this.$refs.table2.setQuery(this.form1);
            },
            doExcel(){
                this.viewType=this.form.sizeView?1:0
                let year=null;
                if(this.form.year!=""&& typeof this.form.year!="undefined"){
                    year=new Date(this.form.year).getFullYear()
                }
                let query={
                    storeId:this.form.storeId,
                    brand:this.form.brand,
                    band:this.form.band,
                    category:this.form.category,
                    year:year,
                    season:this.form.season,
                    s_num:this.form.s_num,
                    o_num:this.form.o_num,
                    sizeView:this.form.sizeView,
                    searchkey:this.skeys
                }
                this.$http("/rest/scrm/StockView/excel", {
                    method: 'post',
                    params: query
                }).then(function(response) {
                    window.open("/rest/base/excelexpord/download/"+response.data.params.id);
                })
            },
            openSelDialog(title,type){
                this.dialog.title=title
                let me=this;
                if(type=="store"){

                    SelectMuiltStore({
                        title:"选择仓店",
                        size:"small",
                        onClick:function(obj){
                            if (obj){
                                me.form.storeId = obj.ids.toString();
                                me.form.storeName = obj.names.toString();
                            }else{
                                me.form.storeId='';
                                me.form.storeName='';
                            }
                            this.closeDialog();
                        }
                    });
                }else if(type=='category'){
                    SelectMuiltCategory({
                        title:"选择品类",
                        size:"small",
                        onClick:function(obj){
                            if (obj){
                                me.form.category = obj.ids.toString();
                                me.form.categoryName = obj.names.toString();
                            }else{
                                me.form.category='';
                                me.form.categoryName='';
                            }
                            this.closeDialog();
                        }
                    });
                }else if(type=='band'){
                    SelectMuiltBand({
                        title:"选择波段",
                        size:"small",
                        onClick:function(obj){
                            if (obj){
                                me.form.band = obj.ids.toString();
                                me.form.bandName = obj.names.toString();
                            }else{
                                me.form.band='';
                                me.form.bandName='';
                            }
                            this.closeDialog();
                        }
                    });
                }
            }
        }
    }
</script>
<style>
    .stock .el-radio + .el-radio {
        margin-left: 2px;
    }
    .search-date .el-form-item__label {
        text-align: right;
        vertical-align: middle;
        float: left;
        font-size: 14px;
        color: #48576a;
        line-height: 1;
        padding: 0px 12px 0px 0;
        box-sizing: border-box;
        line-height: 30px;
    }
</style>
