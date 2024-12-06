var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KotaYogyakarta_1 = new ol.format.GeoJSON();
var features_KotaYogyakarta_1 = format_KotaYogyakarta_1.readFeatures(json_KotaYogyakarta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaYogyakarta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaYogyakarta_1.addFeatures(features_KotaYogyakarta_1);
var lyr_KotaYogyakarta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaYogyakarta_1, 
                style: style_KotaYogyakarta_1,
                popuplayertitle: "Kota Yogyakarta",
                interactive: false,
                title: '<img src="styles/legend/KotaYogyakarta_1.png" /> Kota Yogyakarta'
            });
var format_Sungai_2 = new ol.format.GeoJSON();
var features_Sungai_2 = format_Sungai_2.readFeatures(json_Sungai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_2.addFeatures(features_Sungai_2);
var lyr_Sungai_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_2, 
                style: style_Sungai_2,
                popuplayertitle: "Sungai",
                interactive: false,
                title: '<img src="styles/legend/Sungai_2.png" /> Sungai'
            });
var format_Jalan_3 = new ol.format.GeoJSON();
var features_Jalan_3 = format_Jalan_3.readFeatures(json_Jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_3.addFeatures(features_Jalan_3);
var lyr_Jalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_3, 
                style: style_Jalan_3,
                popuplayertitle: "Jalan",
                interactive: false,
                title: '<img src="styles/legend/Jalan_3.png" /> Jalan'
            });
var format_GgMawar_4 = new ol.format.GeoJSON();
var features_GgMawar_4 = format_GgMawar_4.readFeatures(json_GgMawar_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GgMawar_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GgMawar_4.addFeatures(features_GgMawar_4);
var lyr_GgMawar_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GgMawar_4, 
                style: style_GgMawar_4,
                popuplayertitle: "Gg. Mawar",
                interactive: true,
                title: '<img src="styles/legend/GgMawar_4.png" /> Gg. Mawar'
            });
var format_GgRaflesia_5 = new ol.format.GeoJSON();
var features_GgRaflesia_5 = format_GgRaflesia_5.readFeatures(json_GgRaflesia_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GgRaflesia_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GgRaflesia_5.addFeatures(features_GgRaflesia_5);
var lyr_GgRaflesia_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GgRaflesia_5, 
                style: style_GgRaflesia_5,
                popuplayertitle: "Gg. Raflesia",
                interactive: true,
                title: '<img src="styles/legend/GgRaflesia_5.png" /> Gg. Raflesia'
            });
var format_GgSelatanTerataiBarat_6 = new ol.format.GeoJSON();
var features_GgSelatanTerataiBarat_6 = format_GgSelatanTerataiBarat_6.readFeatures(json_GgSelatanTerataiBarat_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GgSelatanTerataiBarat_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GgSelatanTerataiBarat_6.addFeatures(features_GgSelatanTerataiBarat_6);
var lyr_GgSelatanTerataiBarat_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GgSelatanTerataiBarat_6, 
                style: style_GgSelatanTerataiBarat_6,
                popuplayertitle: "Gg. Selatan Teratai Barat",
                interactive: true,
                title: '<img src="styles/legend/GgSelatanTerataiBarat_6.png" /> Gg. Selatan Teratai Barat'
            });
var format_GgSelatanTerataiTimur_7 = new ol.format.GeoJSON();
var features_GgSelatanTerataiTimur_7 = format_GgSelatanTerataiTimur_7.readFeatures(json_GgSelatanTerataiTimur_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GgSelatanTerataiTimur_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GgSelatanTerataiTimur_7.addFeatures(features_GgSelatanTerataiTimur_7);
var lyr_GgSelatanTerataiTimur_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GgSelatanTerataiTimur_7, 
                style: style_GgSelatanTerataiTimur_7,
                popuplayertitle: "Gg. Selatan Teratai Timur",
                interactive: true,
                title: '<img src="styles/legend/GgSelatanTerataiTimur_7.png" /> Gg. Selatan Teratai Timur'
            });
var format_GgBaratSDMuhNitikan_8 = new ol.format.GeoJSON();
var features_GgBaratSDMuhNitikan_8 = format_GgBaratSDMuhNitikan_8.readFeatures(json_GgBaratSDMuhNitikan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GgBaratSDMuhNitikan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GgBaratSDMuhNitikan_8.addFeatures(features_GgBaratSDMuhNitikan_8);
var lyr_GgBaratSDMuhNitikan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GgBaratSDMuhNitikan_8, 
                style: style_GgBaratSDMuhNitikan_8,
                popuplayertitle: "Gg. Barat SD Muh Nitikan",
                interactive: true,
                title: '<img src="styles/legend/GgBaratSDMuhNitikan_8.png" /> Gg. Barat SD Muh Nitikan'
            });
var format_GgCempaka_9 = new ol.format.GeoJSON();
var features_GgCempaka_9 = format_GgCempaka_9.readFeatures(json_GgCempaka_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GgCempaka_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GgCempaka_9.addFeatures(features_GgCempaka_9);
var lyr_GgCempaka_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GgCempaka_9, 
                style: style_GgCempaka_9,
                popuplayertitle: "Gg. Cempaka",
                interactive: true,
                title: '<img src="styles/legend/GgCempaka_9.png" /> Gg. Cempaka'
            });
var format_GgDahliaI_10 = new ol.format.GeoJSON();
var features_GgDahliaI_10 = format_GgDahliaI_10.readFeatures(json_GgDahliaI_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GgDahliaI_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GgDahliaI_10.addFeatures(features_GgDahliaI_10);
var lyr_GgDahliaI_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GgDahliaI_10, 
                style: style_GgDahliaI_10,
                popuplayertitle: "Gg. Dahlia I",
                interactive: true,
                title: '<img src="styles/legend/GgDahliaI_10.png" /> Gg. Dahlia I'
            });
var format_GgKamboja_11 = new ol.format.GeoJSON();
var features_GgKamboja_11 = format_GgKamboja_11.readFeatures(json_GgKamboja_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GgKamboja_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GgKamboja_11.addFeatures(features_GgKamboja_11);
var lyr_GgKamboja_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GgKamboja_11, 
                style: style_GgKamboja_11,
                popuplayertitle: "Gg. Kamboja",
                interactive: true,
                title: '<img src="styles/legend/GgKamboja_11.png" /> Gg. Kamboja'
            });
var format_GgMelati_12 = new ol.format.GeoJSON();
var features_GgMelati_12 = format_GgMelati_12.readFeatures(json_GgMelati_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GgMelati_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GgMelati_12.addFeatures(features_GgMelati_12);
var lyr_GgMelati_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GgMelati_12, 
                style: style_GgMelati_12,
                popuplayertitle: "Gg. Melati",
                interactive: true,
                title: '<img src="styles/legend/GgMelati_12.png" /> Gg. Melati'
            });
var format_GgMenur_13 = new ol.format.GeoJSON();
var features_GgMenur_13 = format_GgMenur_13.readFeatures(json_GgMenur_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GgMenur_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GgMenur_13.addFeatures(features_GgMenur_13);
var lyr_GgMenur_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GgMenur_13, 
                style: style_GgMenur_13,
                popuplayertitle: "Gg. Menur",
                interactive: true,
                title: '<img src="styles/legend/GgMenur_13.png" /> Gg. Menur'
            });
var format_GgMenurI_14 = new ol.format.GeoJSON();
var features_GgMenurI_14 = format_GgMenurI_14.readFeatures(json_GgMenurI_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GgMenurI_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GgMenurI_14.addFeatures(features_GgMenurI_14);
var lyr_GgMenurI_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GgMenurI_14, 
                style: style_GgMenurI_14,
                popuplayertitle: "Gg. Menur I",
                interactive: true,
                title: '<img src="styles/legend/GgMenurI_14.png" /> Gg. Menur I'
            });
var format_GgSulthonain_15 = new ol.format.GeoJSON();
var features_GgSulthonain_15 = format_GgSulthonain_15.readFeatures(json_GgSulthonain_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GgSulthonain_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GgSulthonain_15.addFeatures(features_GgSulthonain_15);
var lyr_GgSulthonain_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GgSulthonain_15, 
                style: style_GgSulthonain_15,
                popuplayertitle: "Gg. Sulthonain",
                interactive: true,
                title: '<img src="styles/legend/GgSulthonain_15.png" /> Gg. Sulthonain'
            });
var format_GgTerataiRT43_16 = new ol.format.GeoJSON();
var features_GgTerataiRT43_16 = format_GgTerataiRT43_16.readFeatures(json_GgTerataiRT43_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GgTerataiRT43_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GgTerataiRT43_16.addFeatures(features_GgTerataiRT43_16);
var lyr_GgTerataiRT43_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GgTerataiRT43_16, 
                style: style_GgTerataiRT43_16,
                popuplayertitle: "Gg. Teratai RT 43",
                interactive: true,
                title: '<img src="styles/legend/GgTerataiRT43_16.png" /> Gg. Teratai RT 43'
            });
var format_GgTerataiRT44_17 = new ol.format.GeoJSON();
var features_GgTerataiRT44_17 = format_GgTerataiRT44_17.readFeatures(json_GgTerataiRT44_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GgTerataiRT44_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GgTerataiRT44_17.addFeatures(features_GgTerataiRT44_17);
var lyr_GgTerataiRT44_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GgTerataiRT44_17, 
                style: style_GgTerataiRT44_17,
                popuplayertitle: "Gg. Teratai RT 44",
                interactive: true,
                title: '<img src="styles/legend/GgTerataiRT44_17.png" /> Gg. Teratai RT 44'
            });
var format_GgTerataiRT44kearahGgMenurI_18 = new ol.format.GeoJSON();
var features_GgTerataiRT44kearahGgMenurI_18 = format_GgTerataiRT44kearahGgMenurI_18.readFeatures(json_GgTerataiRT44kearahGgMenurI_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GgTerataiRT44kearahGgMenurI_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GgTerataiRT44kearahGgMenurI_18.addFeatures(features_GgTerataiRT44kearahGgMenurI_18);
var lyr_GgTerataiRT44kearahGgMenurI_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GgTerataiRT44kearahGgMenurI_18, 
                style: style_GgTerataiRT44kearahGgMenurI_18,
                popuplayertitle: "Gg. Teratai RT 44 ke arah Gg Menur I",
                interactive: true,
                title: '<img src="styles/legend/GgTerataiRT44kearahGgMenurI_18.png" /> Gg. Teratai RT 44 ke arah Gg Menur I'
            });
var format_JlMendungan_19 = new ol.format.GeoJSON();
var features_JlMendungan_19 = format_JlMendungan_19.readFeatures(json_JlMendungan_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JlMendungan_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JlMendungan_19.addFeatures(features_JlMendungan_19);
var lyr_JlMendungan_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JlMendungan_19, 
                style: style_JlMendungan_19,
                popuplayertitle: "Jl Mendungan",
                interactive: true,
                title: '<img src="styles/legend/JlMendungan_19.png" /> Jl Mendungan'
            });
var format_JlNitikanKembang_20 = new ol.format.GeoJSON();
var features_JlNitikanKembang_20 = format_JlNitikanKembang_20.readFeatures(json_JlNitikanKembang_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JlNitikanKembang_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JlNitikanKembang_20.addFeatures(features_JlNitikanKembang_20);
var lyr_JlNitikanKembang_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JlNitikanKembang_20, 
                style: style_JlNitikanKembang_20,
                popuplayertitle: "Jl Nitikan Kembang",
                interactive: true,
                title: '<img src="styles/legend/JlNitikanKembang_20.png" /> Jl Nitikan Kembang'
            });
var format_JlSingoranu_21 = new ol.format.GeoJSON();
var features_JlSingoranu_21 = format_JlSingoranu_21.readFeatures(json_JlSingoranu_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JlSingoranu_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JlSingoranu_21.addFeatures(features_JlSingoranu_21);
var lyr_JlSingoranu_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JlSingoranu_21, 
                style: style_JlSingoranu_21,
                popuplayertitle: "Jl Singoranu",
                interactive: true,
                title: '<img src="styles/legend/JlSingoranu_21.png" /> Jl Singoranu'
            });
var format_MasjidAlIttihad_22 = new ol.format.GeoJSON();
var features_MasjidAlIttihad_22 = format_MasjidAlIttihad_22.readFeatures(json_MasjidAlIttihad_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MasjidAlIttihad_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasjidAlIttihad_22.addFeatures(features_MasjidAlIttihad_22);
var lyr_MasjidAlIttihad_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasjidAlIttihad_22, 
                style: style_MasjidAlIttihad_22,
                popuplayertitle: "Masjid Al Ittihad",
                interactive: true,
                title: '<img src="styles/legend/MasjidAlIttihad_22.png" /> Masjid Al Ittihad'
            });
var format_MasjidAlIttihadkeTimur_23 = new ol.format.GeoJSON();
var features_MasjidAlIttihadkeTimur_23 = format_MasjidAlIttihadkeTimur_23.readFeatures(json_MasjidAlIttihadkeTimur_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MasjidAlIttihadkeTimur_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasjidAlIttihadkeTimur_23.addFeatures(features_MasjidAlIttihadkeTimur_23);
var lyr_MasjidAlIttihadkeTimur_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasjidAlIttihadkeTimur_23, 
                style: style_MasjidAlIttihadkeTimur_23,
                popuplayertitle: "Masjid Al Ittihad ke Timur",
                interactive: true,
                title: '<img src="styles/legend/MasjidAlIttihadkeTimur_23.png" /> Masjid Al Ittihad ke Timur'
            });
var format_SAHBaratUPTLogam_24 = new ol.format.GeoJSON();
var features_SAHBaratUPTLogam_24 = format_SAHBaratUPTLogam_24.readFeatures(json_SAHBaratUPTLogam_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAHBaratUPTLogam_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAHBaratUPTLogam_24.addFeatures(features_SAHBaratUPTLogam_24);
var lyr_SAHBaratUPTLogam_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAHBaratUPTLogam_24, 
                style: style_SAHBaratUPTLogam_24,
                popuplayertitle: "SAH Barat UPT Logam",
                interactive: true,
                title: '<img src="styles/legend/SAHBaratUPTLogam_24.png" /> SAH Barat UPT Logam'
            });
var format_SAHGgSadewa_25 = new ol.format.GeoJSON();
var features_SAHGgSadewa_25 = format_SAHGgSadewa_25.readFeatures(json_SAHGgSadewa_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAHGgSadewa_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAHGgSadewa_25.addFeatures(features_SAHGgSadewa_25);
var lyr_SAHGgSadewa_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAHGgSadewa_25, 
                style: style_SAHGgSadewa_25,
                popuplayertitle: "SAH Gg Sadewa",
                interactive: true,
                title: '<img src="styles/legend/SAHGgSadewa_25.png" /> SAH Gg Sadewa'
            });
var format_SAHJlAbimanyu_26 = new ol.format.GeoJSON();
var features_SAHJlAbimanyu_26 = format_SAHJlAbimanyu_26.readFeatures(json_SAHJlAbimanyu_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAHJlAbimanyu_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAHJlAbimanyu_26.addFeatures(features_SAHJlAbimanyu_26);
var lyr_SAHJlAbimanyu_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAHJlAbimanyu_26, 
                style: style_SAHJlAbimanyu_26,
                popuplayertitle: "SAH Jl Abimanyu",
                interactive: true,
                title: '<img src="styles/legend/SAHJlAbimanyu_26.png" /> SAH Jl Abimanyu'
            });
var format_SAHJlKranon_27 = new ol.format.GeoJSON();
var features_SAHJlKranon_27 = format_SAHJlKranon_27.readFeatures(json_SAHJlKranon_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAHJlKranon_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAHJlKranon_27.addFeatures(features_SAHJlKranon_27);
var lyr_SAHJlKranon_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAHJlKranon_27, 
                style: style_SAHJlKranon_27,
                popuplayertitle: "SAH Jl Kranon",
                interactive: true,
                title: '<img src="styles/legend/SAHJlKranon_27.png" /> SAH Jl Kranon'
            });
var format_SAHJlPermadi_28 = new ol.format.GeoJSON();
var features_SAHJlPermadi_28 = format_SAHJlPermadi_28.readFeatures(json_SAHJlPermadi_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAHJlPermadi_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAHJlPermadi_28.addFeatures(features_SAHJlPermadi_28);
var lyr_SAHJlPermadi_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAHJlPermadi_28, 
                style: style_SAHJlPermadi_28,
                popuplayertitle: "SAH Jl Permadi",
                interactive: true,
                title: '<img src="styles/legend/SAHJlPermadi_28.png" /> SAH Jl Permadi'
            });
var format_SAHRW13Giwangan_29 = new ol.format.GeoJSON();
var features_SAHRW13Giwangan_29 = format_SAHRW13Giwangan_29.readFeatures(json_SAHRW13Giwangan_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAHRW13Giwangan_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAHRW13Giwangan_29.addFeatures(features_SAHRW13Giwangan_29);
var lyr_SAHRW13Giwangan_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAHRW13Giwangan_29, 
                style: style_SAHRW13Giwangan_29,
                popuplayertitle: "SAH RW 13 Giwangan",
                interactive: true,
                title: '<img src="styles/legend/SAHRW13Giwangan_29.png" /> SAH RW 13 Giwangan'
            });
var group_TitikSumurResapanAirHujan = new ol.layer.Group({
                                layers: [lyr_GgMawar_4,lyr_GgRaflesia_5,lyr_GgSelatanTerataiBarat_6,lyr_GgSelatanTerataiTimur_7,lyr_GgBaratSDMuhNitikan_8,lyr_GgCempaka_9,lyr_GgDahliaI_10,lyr_GgKamboja_11,lyr_GgMelati_12,lyr_GgMenur_13,lyr_GgMenurI_14,lyr_GgSulthonain_15,lyr_GgTerataiRT43_16,lyr_GgTerataiRT44_17,lyr_GgTerataiRT44kearahGgMenurI_18,lyr_JlMendungan_19,lyr_JlNitikanKembang_20,lyr_JlSingoranu_21,lyr_MasjidAlIttihad_22,lyr_MasjidAlIttihadkeTimur_23,lyr_SAHBaratUPTLogam_24,lyr_SAHGgSadewa_25,lyr_SAHJlAbimanyu_26,lyr_SAHJlKranon_27,lyr_SAHJlPermadi_28,lyr_SAHRW13Giwangan_29,],
                                fold: "open",
                                title: "Titik Sumur Resapan Air Hujan"});

lyr_OpenStreetMap_0.setVisible(true);lyr_KotaYogyakarta_1.setVisible(true);lyr_Sungai_2.setVisible(true);lyr_Jalan_3.setVisible(true);lyr_GgMawar_4.setVisible(true);lyr_GgRaflesia_5.setVisible(true);lyr_GgSelatanTerataiBarat_6.setVisible(true);lyr_GgSelatanTerataiTimur_7.setVisible(true);lyr_GgBaratSDMuhNitikan_8.setVisible(true);lyr_GgCempaka_9.setVisible(true);lyr_GgDahliaI_10.setVisible(true);lyr_GgKamboja_11.setVisible(true);lyr_GgMelati_12.setVisible(true);lyr_GgMenur_13.setVisible(true);lyr_GgMenurI_14.setVisible(true);lyr_GgSulthonain_15.setVisible(true);lyr_GgTerataiRT43_16.setVisible(true);lyr_GgTerataiRT44_17.setVisible(true);lyr_GgTerataiRT44kearahGgMenurI_18.setVisible(true);lyr_JlMendungan_19.setVisible(true);lyr_JlNitikanKembang_20.setVisible(true);lyr_JlSingoranu_21.setVisible(true);lyr_MasjidAlIttihad_22.setVisible(true);lyr_MasjidAlIttihadkeTimur_23.setVisible(true);lyr_SAHBaratUPTLogam_24.setVisible(true);lyr_SAHGgSadewa_25.setVisible(true);lyr_SAHJlAbimanyu_26.setVisible(true);lyr_SAHJlKranon_27.setVisible(true);lyr_SAHJlPermadi_28.setVisible(true);lyr_SAHRW13Giwangan_29.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KotaYogyakarta_1,lyr_Sungai_2,lyr_Jalan_3,group_TitikSumurResapanAirHujan];
lyr_KotaYogyakarta_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Sungai_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PL': 'PL', 'SUMBER': 'SUMBER', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Jalan_3.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_GgMawar_4.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_GgRaflesia_5.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_GgSelatanTerataiBarat_6.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_GgSelatanTerataiTimur_7.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_GgBaratSDMuhNitikan_8.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_GgCempaka_9.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_GgDahliaI_10.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_GgKamboja_11.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_GgMelati_12.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_GgMenur_13.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_GgMenurI_14.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_GgSulthonain_15.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_GgTerataiRT43_16.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_GgTerataiRT44_17.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_GgTerataiRT44kearahGgMenurI_18.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_JlMendungan_19.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_JlNitikanKembang_20.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_JlSingoranu_21.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_MasjidAlIttihad_22.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_MasjidAlIttihadkeTimur_23.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_SAHBaratUPTLogam_24.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_SAHGgSadewa_25.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_SAHJlAbimanyu_26.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_SAHJlKranon_27.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_SAHJlPermadi_28.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_SAHRW13Giwangan_29.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_KotaYogyakarta_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Sungai_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'PL': 'TextEdit', 'SUMBER': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Jalan_3.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_GgMawar_4.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_GgRaflesia_5.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_GgSelatanTerataiBarat_6.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_GgSelatanTerataiTimur_7.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_GgBaratSDMuhNitikan_8.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_GgCempaka_9.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_GgDahliaI_10.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_GgKamboja_11.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_GgMelati_12.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_GgMenur_13.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_GgMenurI_14.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_GgSulthonain_15.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_GgTerataiRT43_16.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_GgTerataiRT44_17.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_GgTerataiRT44kearahGgMenurI_18.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_JlMendungan_19.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_JlNitikanKembang_20.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_JlSingoranu_21.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_MasjidAlIttihad_22.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_MasjidAlIttihadkeTimur_23.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_SAHBaratUPTLogam_24.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_SAHGgSadewa_25.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_SAHJlAbimanyu_26.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_SAHJlKranon_27.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_SAHJlPermadi_28.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_SAHRW13Giwangan_29.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_KotaYogyakarta_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Sungai_2.set('fieldLabels', {'OBJECTID': 'no label', 'PL': 'no label', 'SUMBER': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Jalan_3.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_LEN': 'no label', });
lyr_GgMawar_4.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_GgRaflesia_5.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_GgSelatanTerataiBarat_6.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_GgSelatanTerataiTimur_7.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_GgBaratSDMuhNitikan_8.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_GgCempaka_9.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_GgDahliaI_10.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_GgKamboja_11.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_GgMelati_12.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_GgMenur_13.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_GgMenurI_14.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_GgSulthonain_15.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_GgTerataiRT43_16.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_GgTerataiRT44_17.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_GgTerataiRT44kearahGgMenurI_18.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_JlMendungan_19.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_JlNitikanKembang_20.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_JlSingoranu_21.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_MasjidAlIttihad_22.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_MasjidAlIttihadkeTimur_23.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_SAHBaratUPTLogam_24.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_SAHGgSadewa_25.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_SAHJlAbimanyu_26.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_SAHJlKranon_27.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_SAHJlPermadi_28.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_SAHRW13Giwangan_29.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_SAHRW13Giwangan_29.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});