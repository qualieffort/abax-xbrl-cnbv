<?xml version="1.0" encoding="UTF-8"?>

<!--
Project: Xbrl Processing Engine
Copyright (c) 2011  EDGAR(r) Online, Inc.

EDGAR(r) is a federally registered trademark of the U.S. Securities and Exchange Commission. EDGAR 
Online is not affiliated with or approved by the U.S. Securities and Exchange Commission.
-->

<!-- EXPLANATION
     This XSLT transforms a trace file produced by XPE Formula Processor into a pretty report. 

        One parameter MAY  be provided in the "Input Parameters":

            1) The report title - ($reportTitle) 

     Output: A formatted and tabulated report
-->
<xsl:stylesheet version="2.0" xmlns:exsl="http://exslt.org/common"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:xbrli="http://www.xbrl.org/2003/instance">
    <xsl:output method="html" indent="yes"/>
    <xsl:param name="reportTitle">XBRL Processing Engine Formula Report</xsl:param>
    <!-- The formatting of monetary values in the report -->
    <xsl:decimal-format name="base" decimal-separator="." grouping-separator="," minus-sign="-"/>
    <xsl:variable name="formulaTrace" select="/formulaTrace"/>

    <!-- This template renders the XBRL Formula 2008 trace report -->
    <xsl:template name="renderReport" match="/">
        <html>
            <head>
                <STYLE type="text/css"> body { font:normal 68% verdana,arial,helvetica;
                    color:#000000; } table tr td, table tr th { font-size: 68%; } table.details tr
                    th{ font-weight: bold; text-align:left; background:#a6caf0; } table.details tr
                    td{ background:#eeeee0; } p { line-height:1.5em; margin-top:0.5em;
                    margin-bottom:1.0em; } h1 { margin: 0px 0px 5px; font: 165%
                    verdana,arial,helvetica } h2 { margin-top: 1em; margin-bottom: 0.5em; font: bold
                    125% verdana,arial,helvetica } h3 { margin-bottom: 0.5em; font: bold 115%
                    verdana,arial,helvetica } h4 { margin-bottom: 0.5em; font: bold 100%
                    verdana,arial,helvetica }h5 { margin-bottom: 0.5em; font: bold 100%
                    verdana,arial,helvetica } h6 { margin-bottom: 0.5em; font: bold 100%
                    verdana,arial,helvetica } .Error { font-weight:bold; color:red; } .Failure {
                    font-weight:bold; color:purple; } .Properties { text-align:right; } .IsVisible {
                    display: block; } .NotVisible { display: none; } .Expander { cursor: hand;
                    font-family: Courier; } .Parent DIV { margin-Left: 30px !important; } </STYLE>
                <title>
                    <xsl:value-of select="$reportTitle"/>
                </title>
            </head>
            <body>
                <xsl:call-template name="renderHeader">
                    <xsl:with-param name="report" select="$formulaTrace"/>
                </xsl:call-template>

				<xsl:if test="$formulaTrace/summary">
	                <xsl:call-template name="renderSummary">
    	                <xsl:with-param name="summary" select="$formulaTrace/summary"/>
        	        </xsl:call-template>
				</xsl:if>
                <xsl:if test="count($formulaTrace/errors) &gt; 0">
                    <xsl:call-template name="renderErrors">
                        <xsl:with-param name="errors" select="$formulaTrace/errors"/>
                    </xsl:call-template>
                </xsl:if>

                <xsl:choose>
                	<xsl:when test="count($formulaTrace/assertionReport/assertionTest) &gt; 0">
            	        <xsl:call-template name="renderAssertions">
        	                <xsl:with-param name="assertions" select="$formulaTrace/assertionReport"/>
    	                </xsl:call-template>
	                </xsl:when>
	                <xsl:otherwise>
	                	<xsl:if test="$formulaTrace/@type='Exceptions'">
					        <hr size="1"/>
		        			<h2> There are no exceptions in this report. You may need to use the "Full Report" option to see more detail. </h2>
	                	</xsl:if>	
	                </xsl:otherwise>
				</xsl:choose>                
                <xsl:if test="count($formulaTrace/factReport/fact) &gt; 0">
   					<xsl:if test="not($formulaTrace/@type='Exceptions')">
	   	                <xsl:call-template name="renderFacts">
    	   	                <xsl:with-param name="facts" select="$formulaTrace/factReport"/>
        	   	        </xsl:call-template>
   					</xsl:if>
               	</xsl:if>

                <xsl:if test="count($formulaTrace/dynamicAnalysis) &gt; 0">
                <xsl:choose>
                	<xsl:when test="$formulaTrace/@type='Exceptions'">
                		<xsl:if test="count($formulaTrace/assertionReport/assertionTest[@satisfied='notSatisfied']) &gt; 0">
	   	    	            <xsl:call-template name="renderAnalysis">
    		   	                <xsl:with-param name="analysis" select="$formulaTrace/dynamicAnalysis"/>
    	    	   	        </xsl:call-template>
		                </xsl:if>
	                </xsl:when>
	                <xsl:otherwise>
	   	                <xsl:call-template name="renderAnalysis">
    	   	                <xsl:with-param name="analysis" select="$formulaTrace/dynamicAnalysis"/>
        	   	        </xsl:call-template>
	                </xsl:otherwise>
				</xsl:choose>
               	</xsl:if>
            </body>
        </html>
    </xsl:template>
    <!-- This template is responsible for rendering the presentation of the header -->
    <xsl:template name="renderHeader" match="formulaTrace">
        <xsl:param name="report"/>
        <h1>
            <xsl:value-of select="$reportTitle"/>
        </h1>
        <h2> Report prepared on: <xsl:value-of select="$report/@date"/>
        </h2>
        <h2> Document: <xsl:value-of select="$report/@baseURI"/>
        </h2>
        <table width="100%">
            <tr>
                <td align="left"/>
                <td align="right">Copyright &#169; 2006 - 2015  R.R. Donnelley &#38; Sons Company.
                All rights reserved worldwide.
                </td>
            </tr>
        </table>
        <h2> Type: <xsl:value-of select="$report/@type"/>
        </h2>

    </xsl:template>
    <!-- This template is responsible for rendering the presentation of the summary -->
    <xsl:template name="renderSummary">
        <xsl:param name="summary"/>
        <hr size="1"/>
        <h2> Summary </h2>
        <table width="95%" cellspacing="2" cellpadding="5" border="0" class="details">
            <tr valign="top">
                <th> Formulas Compiled </th>
                <th> Formula Fired </th>
                <th> Assertions Compiled </th>
                <th> Assertions Fired </th>
                <th> Assertions Satisfied </th>
                <th> Assertions Not Satisfied </th>
                <th> Assertions OK </th>
                <th> Assertions WARNING </th>
                <th> Assertions ERROR </th>
                <th> Contexts Created </th>
                <th> Units Created </th>
                <th> Facts Created </th>
                <th> Time (ms) </th>
            </tr>
            <tr valign="top" class="Pass">
                <td>
                    <xsl:value-of select="$summary/@compiledFormulaCount"/>
                </td>
                <td>
                    <xsl:value-of select="$summary/@firedFormulaCount"/>
                </td>
                <td>
                    <xsl:value-of select="$summary/@compiledAssertionCount"/>
                </td>
                <td>
                    <xsl:value-of select="$summary/@firedAssertionCount"/>
                </td>
                <td>
                    <xsl:value-of select="$summary/@satisifiedAssertionCount"/>
                </td>
                <td>
                    <xsl:value-of select="$summary/@notSatisfiedAssertionCount"/>
                </td>
                <td>
                    <xsl:value-of select="$summary/@OK"/>
                </td>
                <td>
                    <xsl:value-of select="$summary/@WARNING"/>
                </td>
                <td>
                    <xsl:value-of select="$summary/@ERROR"/>
                </td>
                <td>
                    <xsl:value-of select="$summary/@outputContextCount"/>
                </td>
                <td>
                    <xsl:value-of select="$summary/@outputUnitCount"/>
                </td>
                <td>
                    <xsl:value-of select="$summary/@outputFactCount"/>
                </td>
                <td>
                    <xsl:value-of select="$summary/@duration"/>
                </td>
            </tr>
        </table>
    </xsl:template>
    <!-- This template is responsible for rendering the presentation of the processing data -->
    <xsl:template name="renderAnalysis">
        <xsl:param name="analysis"/>
        <hr size="1"/>
        <h2> Analysis </h2>
        <!-- Process resources -->
        <xsl:for-each select="$analysis/*">

				<xsl:variable name="resource" select="." />
				
                <xsl:choose>
                	<xsl:when test="$formulaTrace/@type='Exceptions'">
                		<xsl:if test="count($formulaTrace/assertionReport/assertionTest[@satisfied='notSatisfied' and @id=$resource/@id]) &gt; 0">
				            <xsl:call-template name="renderRootResource">
                				<xsl:with-param name="resource" select="$resource"/>
				            </xsl:call-template>
		                </xsl:if>
	                </xsl:when>
	                <xsl:otherwise>
			            <xsl:call-template name="renderRootResource">
            			    <xsl:with-param name="resource" select="$resource"/>
            			</xsl:call-template>
	                </xsl:otherwise>
				</xsl:choose>
        </xsl:for-each>
    </xsl:template>
    <xsl:template name="renderRootResource">
        <xsl:param name="resource"/>

		<xsl:element name="a">
			<xsl:attribute name="name">
				<xsl:value-of select="$resource/@id" />
			</xsl:attribute>	
		</xsl:element>

        <!-- render the + or - -->
        <div NOWRAP="true" class="Parent IsVisible">
            <xsl:variable name="children" select="$resource/*"/>

            <hr size="1"/>
            <h2>
                <xsl:value-of select="local-name($resource)"/>
            </h2>
            <xsl:if test="count($resource/@name)  &gt; 0"> [name=&apos;<xsl:value-of
                    select="$resource/@name"/>&apos;] </xsl:if>
            <xsl:call-template name="renderAttributes">
                <xsl:with-param name="resource" select="$resource"/>
                <xsl:with-param name="css" select="NotVisible"/>
            </xsl:call-template>

            <xsl:choose>
	            <xsl:when test="count($resource/results/*) &gt; 0">
    	            <xsl:call-template name="renderResults">
        	            <xsl:with-param name="resource" select="$resource"/>
            	        <xsl:with-param name="css" select="NotVisible"/>
                	</xsl:call-template>
            	</xsl:when>
            	<xsl:otherwise>
					<xsl:if test="count($resource/results) &gt; 0">
						Bindings
				        <div NOWRAP="true">
		                    <label class="Failure">Failed to bind any results at this step. </label>
		                </div>    
	                </xsl:if>    
            	</xsl:otherwise>
            </xsl:choose>

            <!-- Process children -->
            <xsl:for-each select="$children">
                <!-- Do not recurse into results or variables nodes -->
                <xsl:variable name="localName" select="local-name(.)"/>
                <xsl:if test="not($localName = &apos;variables&apos;) and not($localName =
                    &apos;results&apos;)">
                    <xsl:call-template name="renderResource">
                        <xsl:with-param name="resource" select="."/>
                        <xsl:with-param name="css" select="NotVisible"/>
                    </xsl:call-template>
                </xsl:if>
            </xsl:for-each>
        </div>
    </xsl:template>
    <!-- This template is responsible for rendering the presentaiton of a resource -->
    <xsl:template name="renderResource">
        <xsl:param name="resource"/>
        <xsl:param name="css"/>

		<xsl:if test="$resource[local-name(.) = 'assertionTest']">
			<xsl:element name="a">
				<xsl:attribute name="name">
					<xsl:value-of select="$resource/@evaluationID" />
				</xsl:attribute>	
			</xsl:element>
		</xsl:if>

        <!-- render the + or - -->
        <div NOWRAP="true" class="{$css}">
            <xsl:variable name="children" select="$resource/*"/>

            <hr size="1"/>
            <h2>
                <xsl:value-of select="local-name($resource)"/>
            </h2>
            <xsl:if test="count($resource/@name)  &gt; 0"> [name=&apos;<xsl:value-of
                    select="$resource/@name"/>&apos;] </xsl:if>
            <xsl:if test="count($resource/@*) &gt; 0">
                <xsl:call-template name="renderAttributes">
                    <xsl:with-param name="resource" select="$resource"/>
                    <xsl:with-param name="css" select="$css"/>
                </xsl:call-template>
            </xsl:if>
            <xsl:if test="count($resource/variables/variable) &gt; 0">
                <xsl:call-template name="renderVariables">
                    <xsl:with-param name="resource" select="$resource"/>
                    <xsl:with-param name="css" select="$css"/>
                </xsl:call-template>
            </xsl:if>
            <xsl:choose>
	            <xsl:when test="count($resource/results/*) &gt; 0">
    	            <xsl:call-template name="renderResults">
        	            <xsl:with-param name="resource" select="$resource"/>
            	        <xsl:with-param name="css" select="$css"/>
                	</xsl:call-template>
            	</xsl:when>
            	<xsl:otherwise>
					<xsl:if test="count($resource/results) &gt; 0">
						Bindings
				        <div NOWRAP="true">
		                    <label class="Failure">Failed to bind any results at this step. </label>
	                    </div>
	                </xsl:if>    
            	</xsl:otherwise>
            </xsl:choose>
            <!-- Process children -->
            <xsl:for-each select="$children">
                <!-- Do not recurse into results or variables nodes -->
                <xsl:variable name="localName" select="local-name(.)"/>
                <xsl:if test="not($localName = &apos;variables&apos;) and not($localName =
                    &apos;results&apos;)">
                    <xsl:call-template name="renderResource">
                        <xsl:with-param name="resource" select="."/>
                        <xsl:with-param name="css" select="NotVisible"/>
                    </xsl:call-template>
                </xsl:if>
            </xsl:for-each>
        </div>
    </xsl:template>
    <xsl:template name="renderAttributes">
        <xsl:param name="resource"/>
        <xsl:param name="css"/>
        <xsl:variable name="attributes" select="$resource/@*"/> 

		<p />
        Attributes 
        <div NOWRAP="true"
            class="{$css}">
            <xsl:choose>
                <xsl:when test="count($attributes)  &gt; 0">
                    <table width="95%" cellspacing="2" cellpadding="5" border="0" class="details">
						<xsl:if test="local-name(.) != 'evaluationID'">
                         <tr valign="top">
                            <xsl:for-each select="$attributes">
                                <th>
                                    <xsl:value-of select="local-name(.)"/>
                                </th>
                            </xsl:for-each>
                         </tr>
                         <tr valign="top">
                            <xsl:for-each select="$attributes">
                                <td>
                                    <xsl:value-of select="."/>
                                </td>
                            </xsl:for-each>
                         </tr>
						</xsl:if>
                    </table>
                </xsl:when>
            </xsl:choose>
        </div>
    </xsl:template>
    <xsl:template name="renderVariables">
        <xsl:param name="resource"/>
        <xsl:param name="css"/>
        <xsl:variable name="variables" select="$resource/variables"/>

        Variables
        <div NOWRAP="true" class="{$css}">
            <xsl:choose>
                <xsl:when test="count($variables)  &gt; 0">
                    <table width="95%" cellspacing="2" cellpadding="5" border="0" class="details">
                        <tr valign="top">
                            <th> name </th>
                            <th> value </th>
                        </tr>
                        <xsl:for-each select="$variables/variable">
                        <tr valign="top">
                                <td>
                                    <xsl:value-of select="@name"/>
                                </td>
                                <td>
                                    <xsl:value-of select="."/>
                                </td>
                        </tr>
                        </xsl:for-each>
                    </table>
                </xsl:when>
            </xsl:choose>
        </div>
    </xsl:template>
    <xsl:template name="renderResults">
        <xsl:param name="resource"/>
        <xsl:param name="css"/>
        <xsl:variable name="results" select="$resource/results"/>

		Bindings
        <div NOWRAP="true" class="{$css}">
            <xsl:choose>
                <xsl:when test="count($results)  &gt; 0">
                    <table width="95%" cellspacing="2" cellpadding="5" border="0" class="details">
                        <tr valign="top">
                            <th> value </th>
                        </tr>
                        <xsl:for-each select="$results/*">
                            <tr valign="top">
                                <td>
                                    <xsl:value-of select="."/>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </xsl:when>
            </xsl:choose>
        </div>
    </xsl:template>

    <!-- This template is responsible for rendering the presentation of the consistency assertion report -->
    <xsl:template name="renderAssertions">
        <xsl:param name="assertions"/>

		<xsl:if test="count($assertions) > 0">
	        <hr size="1"/>
	        <h2> Assertion Report </h2>

	        <xsl:call-template name="renderConsistencyAssertions">
  		       <xsl:with-param name="assertions" select="$assertions/assertionTest[@type = 'consistencyAssertion']"/>
        	</xsl:call-template>

	        <xsl:call-template name="renderExistenceAssertions">
  		       <xsl:with-param name="assertions" select="$assertions/assertionTest[@type = 'existenceAssertion']"/>
        	</xsl:call-template>

	        <xsl:call-template name="renderValueAssertions">
  		       <xsl:with-param name="assertions" select="$assertions/assertionTest[@type = 'valueAssertion']"/>
        	</xsl:call-template>
		</xsl:if>
		
    </xsl:template>

    <!-- This template is responsible for rendering the presentation of the consistency assertion report -->
    <xsl:template name="renderConsistencyAssertions">
        <xsl:param name="assertions"/>
        
	    <xsl:if test="count($assertions) > 0">
        	<h3> Consistency Assertions</h3>

	        <xsl:if test="count($formulaTrace/dynamicAnalysis) &gt; 0">
				Please click on the consistency assertion id for more detail.
			</xsl:if>	

    	    <table width="95%" cellspacing="2" cellpadding="5" border="0" class="details">
	            <tr valign="top">
                	<th> Id </th>
            	    <th> Satisfied </th>
            	    <th> Severity </th>
    	            <th> Message </th>
        	    </tr>

	            <xsl:for-each select="$assertions">
		    	    <xsl:call-template name="renderConsistencyAssertion">
  		    		   <xsl:with-param name="assertion" select="."/>
 	    	   		</xsl:call-template>
				</xsl:for-each>
	        </table>
        </xsl:if>
    </xsl:template>

    <!-- This template is responsible for rendering the presentation of a consistency assertion test -->
    <xsl:template name="renderConsistencyAssertion">
        <xsl:param name="assertion"/>

        <tr valign="top" class="Pass">
            <td>
				<xsl:call-template name="renderID">
					<xsl:with-param name="assertion" select="$assertion" />
				</xsl:call-template>
            </td>
            <td>
                <xsl:value-of select="$assertion/@satisfied"/>
            </td>
            <td>
            	<xsl:choose>
            	<xsl:when test="$assertion/@severity">
	                <xsl:value-of select="$assertion/@severity"/>
            	</xsl:when>
            	</xsl:choose>
            </td>
            <td>
            	<xsl:choose>
            	<xsl:when test="$assertion/@message">
	                <xsl:value-of select="$assertion/@message"/>
            	</xsl:when>
            	<xsl:otherwise>
					<xsl:if test="$assertion/@satisfied='satisfied'">
							The value of the element in your XBRL submission is consistent with the expected result of the formula. <xsl:call-template name="renderIDInline"><xsl:with-param name="assertion" select="$assertion" /> </xsl:call-template>
					</xsl:if>
					<xsl:if test="$assertion/@satisfied='notSatisfied'">
							The value of the element in your XBRL submission is not consistent with the expected result of the formula.  <xsl:call-template name="renderIDInline"><xsl:with-param name="assertion" select="$assertion" /> </xsl:call-template>
					</xsl:if>
            	</xsl:otherwise>
            	</xsl:choose>
            </td>
        </tr>
    </xsl:template>
 
    <!-- This template is responsible for rendering the presentation of the value assertion report -->
    <xsl:template name="renderValueAssertions">
        <xsl:param name="assertions"/>

	    <xsl:if test="count($assertions) > 0">
	        <h3> Value Assertions</h3>

 	        <xsl:if test="count($formulaTrace/dynamicAnalysis) &gt; 0">
				Please click on the value assertion id for more detail.
			</xsl:if>	
        	<table width="95%" cellspacing="2" cellpadding="5" border="0" class="details">
    	        <tr valign="top">
	                <th> Id </th>
            	    <th> Satisfied </th>
            	    <th> Severity </th>
    	            <th> Message </th>
    	        </tr>

	            <xsl:for-each select="$assertions">
		        	<xsl:call-template name="renderValueAssertion">
  	    			   <xsl:with-param name="assertion" select="."/>
        			</xsl:call-template>
				</xsl:for-each>

	        </table>
        </xsl:if>
    </xsl:template>

    <!-- This template is responsible for rendering the presentation of a value assertion test -->
    <xsl:template name="renderValueAssertion">
        <xsl:param name="assertion"/>
        <tr valign="top" class="Pass">
            <td>
				<xsl:call-template name="renderID">
					<xsl:with-param name="assertion" select="$assertion" />
				</xsl:call-template>
            </td>
            <td>
                <xsl:value-of select="$assertion/@satisfied"/>
            </td>
            <td>
            	<xsl:choose>
            	<xsl:when test="$assertion/@severity">
	                <xsl:value-of select="$assertion/@severity"/>
            	</xsl:when>
            	</xsl:choose>
            </td>
            <td>
            	<xsl:choose>
            	<xsl:when test="$assertion/@message">
	                <xsl:value-of select="$assertion/@message"/>
            	</xsl:when>
            	<xsl:otherwise>
					<xsl:if test="$assertion/@satisfied='satisfied'">
						The value of the element in your XBRL submission matches the expected result of the formula. <xsl:call-template name="renderIDInline"><xsl:with-param name="assertion" select="$assertion" /> </xsl:call-template>
					</xsl:if>
					<xsl:if test="$assertion/@satisfied='notSatisfied'">
						The value of the element in your XBRL submission does not match the expected result of the formula. <xsl:call-template name="renderIDInline"><xsl:with-param name="assertion" select="$assertion" /> </xsl:call-template>
					</xsl:if>
            	</xsl:otherwise>
            	</xsl:choose>
            </td>
        </tr>
    </xsl:template>

	<xsl:template name="renderID">
		<xsl:param name="assertion" />
		
		<xsl:variable name="evaluationID" select="$assertion/@evaluationID" />
        <xsl:variable name="xmlID" select="$assertion/@id" />
        <xsl:variable name="cnt" select="$assertion/@cnt" />

		<xsl:choose>
		<xsl:when test="$evaluationID">
	        <xsl:element name="a">
    	    	<xsl:attribute name="href">
			        <xsl:value-of select="concat('#',$evaluationID)"/>
           		</xsl:attribute>
	       		<xsl:value-of select="concat($xmlID,concat(' (evaluation ', $cnt, ')'))"/>
      		</xsl:element>
		</xsl:when>
		<xsl:otherwise>
	       		<xsl:value-of select="concat($xmlID,concat(' (evaluation ', $cnt, ')'))"/>
		</xsl:otherwise>
		</xsl:choose>		
		
	</xsl:template>

	<xsl:template name="renderIDInline">
		<xsl:param name="assertion" />
		
		<xsl:variable name="evaluationID" select="$assertion/@evaluationID" />
        <xsl:variable name="xmlID" select="$assertion/@id" />
        <xsl:variable name="cnt" select="$assertion/@cnt" />

		<xsl:choose>
		<xsl:when test="$evaluationID">
	        Please click on <xsl:element name="a">
    	    	<xsl:attribute name="href">
			        <xsl:value-of select="concat('#',$evaluationID)"/>
           		</xsl:attribute>
	       		<xsl:value-of select="concat($xmlID,concat(' (evaluation ', $cnt, ')'))"/>
      		</xsl:element> for more detail.
		</xsl:when>
		</xsl:choose>		
		
	</xsl:template>

    <!-- This template is responsible for rendering the presentation of the existence assertion report -->
    <xsl:template name="renderExistenceAssertions">
        <xsl:param name="assertions"/>

	    <xsl:if test="count($assertions) > 0">
        	<h2> Existence Assertions</h2>

	        <xsl:if test="count($formulaTrace/dynamicAnalysis) &gt; 0">
				Please click on the value existence id for more detail.
			</xsl:if>	

    	    <table width="95%" cellspacing="2" cellpadding="5" border="0" class="details">
	            <tr valign="top">
	                <th> Id </th>
            	    <th> Satisfied </th>
            	    <th> Severity </th>
    	            <th> Message </th>
    	        </tr>

	            <xsl:for-each select="$assertions">
		    	    <xsl:call-template name="renderExistenceAssertion">
  	    			   <xsl:with-param name="assertion" select="."/>
        			</xsl:call-template>
				</xsl:for-each>

	        </table>
        </xsl:if>
    </xsl:template>

    <!-- This template is responsible for rendering the presentation of a existence assertion test -->
    <xsl:template name="renderExistenceAssertion">
        <xsl:param name="assertion"/>
        <tr valign="top" class="Pass">
            <td>
				<xsl:call-template name="renderID">
					<xsl:with-param name="assertion" select="$assertion" />
				</xsl:call-template>
            </td>
            <td>
                <xsl:value-of select="$assertion/@satisfied"/>
            </td>
            <td>
                <xsl:choose>
            	<xsl:when test="$assertion/@severity">
	                <xsl:value-of select="$assertion/@severity"/>
            	</xsl:when>
            	</xsl:choose>
            </td>
            <td>
            	<xsl:choose>
            	<xsl:when test="$assertion/@message">
	                <xsl:value-of select="$assertion/@message"/>
            	</xsl:when>
            	<xsl:otherwise>
					<xsl:if test="$assertion/@satisfied='satisfied'">
						The element(s) in your XBRL submission exists. <xsl:call-template name="renderIDInline"><xsl:with-param name="assertion" select="$assertion" /> </xsl:call-template>
					</xsl:if>
					<xsl:if test="$assertion/@satisfied='notSatisfied'">
						The element(s) in your XBRL submission do not exist. <xsl:call-template name="renderIDInline"><xsl:with-param name="assertion" select="$assertion" /> </xsl:call-template>
					</xsl:if>
				</xsl:otherwise>
            	</xsl:choose>
            </td>
        </tr>
    </xsl:template>

    <!-- This template is responsible for rendering the presentation of the fact report -->
    <xsl:template name="renderFacts">
        <xsl:param name="facts"/>
        <hr size="1"/>
        <h3> Fact Production Report </h3>
        <table width="95%" cellspacing="2" cellpadding="5" border="0" class="details">
            <tr valign="top">
                <th> element </th>
                <th> value </th>
                <th> unit </th>
                <th> effectiveValue </th>
                <th> isNil </th>
                <th> context </th>
            </tr>
            <xsl:apply-templates select="$facts/fact"/>
        </table>
    </xsl:template>
    <!-- This template is responsible for rendering the presentation of fact -->
    <xsl:template name="renderFact" match="fact">
        <xsl:variable name="fact" select="."/>
        <tr valign="top" class="Pass">
            <td>
                <xsl:value-of select="@element"/>
            </td>
            <td>
                <xsl:value-of select="@value"/>
            </td>
            <td>
                <xsl:value-of select="@unit"/>
            </td>
            <td>
                <xsl:value-of select="@effectiveValue"/>
            </td>
            <td>
                <xsl:value-of select="@isNil"/>
            </td>
            <td>
                <xsl:value-of select="@context"/>
            </td>
        </tr>
    </xsl:template>
    <!-- This template is responsible for rendering the presentation of the context report -->
    <xsl:template name="renderContexts">
        <xsl:param name="contexts"/>
        <hr size="1"/>
        <h2> Context Production Report </h2>
        <table width="95%" cellspacing="2" cellpadding="5" border="0" class="details">
            <tr valign="top">
                <th> id </th>
                <th> xml </th>
            </tr>
            <xsl:apply-templates select="$contexts/xbrli:context"/>
        </table>
    </xsl:template>
    <!-- This template is responsible for rendering the presentation of Context -->
    <xsl:template name="renderContext" match="context">
        <xsl:variable name="context" select="."/>
        <tr valign="top" class="Pass">
            <td>
                <xsl:value-of select="@id"/>
            </td>
            <td>
                <xsl:copy-of select="$context"/>
            </td>
        </tr>
    </xsl:template>
    <!-- This template is responsible for rendering the presentation of the unit report -->
    <xsl:template name="renderUnits">
        <xsl:param name="units"/>
        <hr size="1"/>
        <h2> Unit Production Report </h2>
        <table width="95%" cellspacing="2" cellpadding="5" border="0" class="details">
            <tr valign="top">
                <th> id </th>
                <th> xml </th>
            </tr>
            <xsl:apply-templates select="$units/xbrli:unit"/>
        </table>
    </xsl:template>
    <!-- This template is responsible for rendering the presentation of Context -->
    <xsl:template name="renderUnit" match="unit">
        <xsl:variable name="unit" select="."/>
        <tr valign="top" class="Pass">
            <td>
                <xsl:value-of select="@id"/>
            </td>
            <td>
                <xsl:copy-of select="$unit"/>
            </td>
        </tr>
    </xsl:template>
    <!-- This template is responsible for rendering the presentation of the header -->
    <xsl:template name="renderErrors" match="errors">
        <xsl:param name="errors"/>
        <hr size="1"/>
        <h2> Problems (<xsl:value-of select="$errors/@count"/> errors, 0 warnings, 0 infos) </h2>
        <table width="95%" cellspacing="2" cellpadding="5" border="0" class="details">
            <tr valign="top">
                <th> Type </th>
                <th> Error code </th>
                <th> URI </th>
                <th> resource (id/xlink:label) </th>
                <th> Location </th>
                <th> surrounding text </th>
                <th> Other Information </th>
            </tr>
            <xsl:apply-templates select="$errors/error"/>
        </table>
    </xsl:template>
    <!-- This template is responsible for rendering the presentation of the header -->
    <xsl:template name="renderError" match="error">
        <xsl:variable name="particles" select="./particles"/>
        <tr valign="top" class="Failure">
            <td> Error </td>
            <td>
                <xsl:value-of select="@uri"/>
            </td>
            <td>
                <xsl:value-of select="$particles/particle[1]"/>
            </td>
            <td>
                <xsl:value-of select="$particles/particle[4]"/>
            </td>
            <td> (line <xsl:value-of select="$particles/particle[2]"/>, column <xsl:value-of
                    select="$particles/particle[3]"/>) </td>
            <td>
                <xsl:value-of select="$particles/particle[5]"/>
            </td>
            <td>
                <xsl:value-of select="$particles/particle[6]"/>
            </td>
        </tr>
    </xsl:template>
    <xsl:template name="renderParticle">
        <xsl:param name="pos"/>
        <xsl:param name="total"/>
        <xsl:param name="particles"/>
        <xsl:if test="$pos &lt; $total"> [<xsl:value-of select="$particles/particle[$pos]"/>]
                <xsl:call-template name="renderParticle">
                <xsl:with-param name="pos" select="$pos + 1"/>
                <xsl:with-param name="total" select="$total"/>
            </xsl:call-template>
        </xsl:if>
    </xsl:template>
</xsl:stylesheet>

<!--
The contents of this file are subject to the End-User Software License Agreement (the "License"). You may not use this 
file except in compliance with the License. A current copy of the License is available by contacting product support.

Software distributed under the License is distributed on an "AS IS" basis, WITHOUT WARRANTY OF ANY KIND, either express or 
implied. See the License for the specific language governing rights and limitations under the License.
-->
