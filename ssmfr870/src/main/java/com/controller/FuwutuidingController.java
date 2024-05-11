package com.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

import com.utils.ValidatorUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.annotation.IgnoreAuth;

import com.entity.FuwutuidingEntity;
import com.entity.view.FuwutuidingView;

import com.service.FuwutuidingService;
import com.service.TokenService;
import com.utils.PageUtils;
import com.utils.R;
import com.utils.MD5Util;
import com.utils.MPUtil;
import com.utils.CommonUtil;


/**
 * 服务退订
 * 后端接口
 * @author 
 * @email 
 * @date 2021-04-01 20:21:01
 */
@RestController
@RequestMapping("/fuwutuiding")
public class FuwutuidingController {
    @Autowired
    private FuwutuidingService fuwutuidingService;
    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,FuwutuidingEntity fuwutuiding, 
		HttpServletRequest request){
    	if(!request.getSession().getAttribute("role").toString().equals("管理员")) {
    		fuwutuiding.setUserid((Long)request.getSession().getAttribute("userId"));
    	}

		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("yonghu")) {
			fuwutuiding.setZhanghao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<FuwutuidingEntity> ew = new EntityWrapper<FuwutuidingEntity>();
		PageUtils page = fuwutuidingService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, fuwutuiding), params), params));
        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,FuwutuidingEntity fuwutuiding, HttpServletRequest request){

		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("yonghu")) {
			fuwutuiding.setZhanghao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<FuwutuidingEntity> ew = new EntityWrapper<FuwutuidingEntity>();
		PageUtils page = fuwutuidingService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, fuwutuiding), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( FuwutuidingEntity fuwutuiding){
       	EntityWrapper<FuwutuidingEntity> ew = new EntityWrapper<FuwutuidingEntity>();
      	ew.allEq(MPUtil.allEQMapPre( fuwutuiding, "fuwutuiding")); 
        return R.ok().put("data", fuwutuidingService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(FuwutuidingEntity fuwutuiding){
        EntityWrapper< FuwutuidingEntity> ew = new EntityWrapper< FuwutuidingEntity>();
 		ew.allEq(MPUtil.allEQMapPre( fuwutuiding, "fuwutuiding")); 
		FuwutuidingView fuwutuidingView =  fuwutuidingService.selectView(ew);
		return R.ok("查询服务退订成功").put("data", fuwutuidingView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        FuwutuidingEntity fuwutuiding = fuwutuidingService.selectById(id);
        return R.ok().put("data", fuwutuiding);
    }

    /**
     * 前端详情
     */
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        FuwutuidingEntity fuwutuiding = fuwutuidingService.selectById(id);
        return R.ok().put("data", fuwutuiding);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody FuwutuidingEntity fuwutuiding, HttpServletRequest request){
    	fuwutuiding.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(fuwutuiding);
    	fuwutuiding.setUserid((Long)request.getSession().getAttribute("userId"));

        fuwutuidingService.insert(fuwutuiding);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody FuwutuidingEntity fuwutuiding, HttpServletRequest request){
    	fuwutuiding.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(fuwutuiding);
    	fuwutuiding.setUserid((Long)request.getSession().getAttribute("userId"));

        fuwutuidingService.insert(fuwutuiding);
        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    public R update(@RequestBody FuwutuidingEntity fuwutuiding, HttpServletRequest request){
        //ValidatorUtils.validateEntity(fuwutuiding);
        fuwutuidingService.updateById(fuwutuiding);//全部更新
        return R.ok();
    }
    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        fuwutuidingService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
    /**
     * 提醒接口
     */
	@RequestMapping("/remind/{columnName}/{type}")
	public R remindCount(@PathVariable("columnName") String columnName, HttpServletRequest request, 
						 @PathVariable("type") String type,@RequestParam Map<String, Object> map) {
		map.put("column", columnName);
		map.put("type", type);
		
		if(type.equals("2")) {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			Calendar c = Calendar.getInstance();
			Date remindStartDate = null;
			Date remindEndDate = null;
			if(map.get("remindstart")!=null) {
				Integer remindStart = Integer.parseInt(map.get("remindstart").toString());
				c.setTime(new Date()); 
				c.add(Calendar.DAY_OF_MONTH,remindStart);
				remindStartDate = c.getTime();
				map.put("remindstart", sdf.format(remindStartDate));
			}
			if(map.get("remindend")!=null) {
				Integer remindEnd = Integer.parseInt(map.get("remindend").toString());
				c.setTime(new Date());
				c.add(Calendar.DAY_OF_MONTH,remindEnd);
				remindEndDate = c.getTime();
				map.put("remindend", sdf.format(remindEndDate));
			}
		}
		
		Wrapper<FuwutuidingEntity> wrapper = new EntityWrapper<FuwutuidingEntity>();
		if(map.get("remindstart")!=null) {
			wrapper.ge(columnName, map.get("remindstart"));
		}
		if(map.get("remindend")!=null) {
			wrapper.le(columnName, map.get("remindend"));
		}
		if(!request.getSession().getAttribute("role").toString().equals("管理员")) {
    		wrapper.eq("userid", (Long)request.getSession().getAttribute("userId"));
    	}

		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("yonghu")) {
			wrapper.eq("zhanghao", (String)request.getSession().getAttribute("username"));
		}

		int count = fuwutuidingService.selectCount(wrapper);
		return R.ok().put("count", count);
	}
	


}
